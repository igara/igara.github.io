import { NextPage } from "next";
import Image from "next/image";
import { AllJSON } from "@igara.github.io/json";
import { TextField, Wrap } from "@igara.github.io/ui";
import { css } from "@emotion/react";
import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";

type Props = { blogs: AllJSON };

export const BlogsPage: NextPage<Props> = ({ blogs }) => {
  const router = useRouter();
  const search = router.query.search ? router.query.search.toString() : "";
  const [searchWord, setSearchWord] = useState("");

  const filterBlogs = searchWord
    ? blogs.filter((b) => {
        const blogText = JSON.stringify(b);
        const reg = new RegExp(searchWord, "i");
        return reg.test(blogText);
      })
    : blogs;

  const onChangeSearhWord = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchWord(e.target.value);
    },
    [setSearchWord]
  );

  const onClickLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const linkElement = e.target as HTMLAnchorElement;
    const href = linkElement.href;

    if (window === window.parent) {
      router.push(href);
    } else {
      // iframe
      window.parent.postMessage(
        {
          href,
        },
        "*"
      );
    }
  };

  useEffect(() => {
    if (!searchWord && search) {
      setSearchWord(search);
    }
  }, [search, searchWord]);

  return (
    <div css={blogsCSS}>
      {!search && (
        <Wrap element="div" interval={{ left: "0" }}>
          <TextField
            label="search word"
            defaultValue={searchWord ? search : searchWord}
            onChange={onChangeSearhWord}
          />
        </Wrap>
      )}

      {filterBlogs.map((blog) => (
        <div key={blog.link}>
          <Image
            src={blog.ogp.small}
            alt={blog.title}
            width={100}
            height={100}
          />
          <div>
            <div>
              <a href={blog.link} onClick={onClickLink}>
                {blog.title}
              </a>
            </div>
            <div>{blog.description}...</div>
            <div>publish: {blog.publishedAt}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const blogsCSS = css`
  overflow-x: hidden;
`;
