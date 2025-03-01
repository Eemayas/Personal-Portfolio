import TOCInline from "pliny/ui/TOCInline.js";
import Pre from "pliny/ui/Pre.js";
import BlogNewsletterForm from "pliny/ui/BlogNewsletterForm.js";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import CustomLink from "./Link";

export const TableWrapper = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full table-auto divide-y divide-gray-200 text-[1rem]">
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
  h1: (props) => (
    <h1
      style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-dis pl-4" style={{ fontSize: "1rem" }} {...props} />
  ),
  li: (props) => (
    <li className="custom-list mb-2" style={{ fontSize: "1rem" }} {...props} />
  ),
};
