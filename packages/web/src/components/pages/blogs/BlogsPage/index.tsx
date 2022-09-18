import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { AllJSON } from "@igara.github.io/json";

type Props = { blogs: AllJSON };

export const BlogsPage: NextPage<Props> = ({ blogs }) => {
  return (
    <div>
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
              <Link href={blog.link}>{blog.title}</Link>
            </div>
            <div>{blog.description}...</div>
            <div>publish: {blog.publishedAt}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
