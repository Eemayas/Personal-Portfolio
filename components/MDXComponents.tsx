import TOCInline from "pliny/ui/TOCInline.js";
import Pre from "pliny/ui/Pre.js";
import BlogNewsletterForm from "pliny/ui/BlogNewsletterForm.js";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import CustomLink from "./Link";

export const TableWrapper = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table-auto min-w-full divide-y divide-gray-200 text-[1rem]">
        {children}
      </table>
    </div>
  );
};

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  p: (props) => <p style={{ fontSize: "1rem" }} {...props} />,
  h1: "h1",
  h2: "h2",
  h3: "h3",
  ul: (props) => (
    <ul className="list-dis pl-4" style={{ fontSize: "1rem" }} {...props} />
  ),
  li: (props) => (
    <li className="mb-2 custom-list " style={{ fontSize: "1rem" }} {...props} />
  ),
};
