import { NextPage } from "next";
import Image from "next/image";
import { AllJSON } from "@igara.github.io/json";
import { css } from "@emotion/react";
import React from "react";
import { useRouter } from "next/router";

type Props = { blogs: AllJSON };

export const BlogsPage: NextPage<Props> = ({ blogs }) => {
  const router = useRouter();

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

  return (
    <div css={blogsCSS}>
      {blogs.map((blog) => (
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
