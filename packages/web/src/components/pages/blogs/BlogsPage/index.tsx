import { NextPage } from "next";
import Link from "next/link";
import { AllJSON } from "src/api";
import { ThemaClassname } from "@igara.github.io/ui";

type Props = { blogs: AllJSON };

export const BlogsPage: NextPage<Props> = ({ blogs }) => {
  return (
    <div className={ThemaClassname()}>
      {blogs.map((blog) => (
        <Link key={blog.link} href={blog.link}>
          {blog.title}
        </Link>
      ))}
    </div>
  );
};
