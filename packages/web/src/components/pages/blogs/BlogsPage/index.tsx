import { NextPage } from "next";
import Link from "next/link";
import { AllJSON } from "src/api";
import { ThemaClassname } from "@igara.github.io/ui";
const themaClassname = ThemaClassname();

type Props = { blogs: AllJSON };

export const BlogsPage: NextPage<Props> = ({ blogs }) => {
  return (
    <div className={themaClassname.themaVariables}>
      {blogs.map((blog) => (
        <Link key={blog.link} href={blog.link}>
          {blog.title}
        </Link>
      ))}
    </div>
  );
};
