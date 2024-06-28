"use client";
import ListLayout from "@/layouts/ListLayout";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";
import { allBlogs } from "contentlayer/generated";
import { genPageMetadata } from "app/seo";
import { fadeIn, textVariant } from "@/lib/utils/motion";
import { styles } from "@/app/style";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/lib/hoc";
const POSTS_PER_PAGE = 5;

// export const metadata = genPageMetadata({ title: "Blog" });

function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs));
  const pageNumber = 1;
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };
  const blogDescription = `Below are a few selected blog posts that demonstrate my skills and experience, showcasing real-world examples of my work. Each post is accompanied by a brief description and relevant links. These blogs serve as tangible evidence of my ability to tackle intricate challenges, adapt to various technologies, and efficiently handle project management.`;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Latest updates</p>
        <h2 className={styles.sectionHeadText}>Blogs</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          {blogDescription}
        </motion.p>
      </div>
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <ListLayout
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          title="All Posts"
        />
      </motion.div>
    </>
  );
}

export default SectionWrapper(BlogPage, "blogPage");
