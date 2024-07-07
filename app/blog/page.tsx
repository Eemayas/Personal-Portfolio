import ListLayout from "@/layouts/ListLayout";
import { genPageMetadata } from "app/seo";
import { SectionWrapper } from "@/lib/hoc";
import {
  DescriptionAnimation,
  SectionTitle,
} from "@/components/TextAnimations";

export const metadata = genPageMetadata({ title: "Blog" });

function BlogPage() {
  const blogDescription = `Below are a few selected blog posts that demonstrate my skills and experience, showcasing real-world examples of my work. Each post is accompanied by a brief description and relevant links. These blogs serve as tangible evidence of my ability to tackle intricate challenges, adapt to various technologies, and efficiently handle project management.`;

  return (
    <>
      <SectionTitle SecondaryTitle={"Latest updates"} PrimaryTitle={"Blogs"} />
      <DescriptionAnimation description={blogDescription} />

      <ListLayout />
    </>
  );
}

export default SectionWrapper(BlogPage, "blogPage");
