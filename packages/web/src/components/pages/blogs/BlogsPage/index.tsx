import { NextPage } from "next";
import Link from "next/link";
import { AllJSON } from "@igara.github.io/json";

type Props = { blogs: AllJSON };

export const BlogsPage: NextPage<Props> = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <Link key={blog.link} href={blog.link}>
          {blog.title}
        </Link>
      ))}
    </div>
  );
};
