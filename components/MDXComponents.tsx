import TOCInline from "pliny/ui/TOCInline.js";
import Pre from "pliny/ui/Pre.js";
import BlogNewsletterForm from "pliny/ui/BlogNewsletterForm.js";
import type { MDXComponents } from "mdx/types";
import NextImage, { ImageProps } from "next/image";
import CustomLink from "./Link";
const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} />;

const TableWrapper = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table-auto min-w-full divide-y divide-gray-200 text-[18px]">
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
  p: (props) => (
    <p
      style={{ fontSize: "18px" }}
      className=" text-black dark:text-white pl-4"
      {...props}
    />
  ),
  h1: "h1",
  h2: "h2",
  h3: "h3",
  ul: (props) => (
    <ul
      className="list-disc text-black dark:text-white pl-4"
      style={{ fontSize: "18px" }}
      {...props}
    />
  ),
  li: (props) => (
    <li className="mb-2 custom-list " style={{ fontSize: "18px" }} {...props} />
  ),
};
