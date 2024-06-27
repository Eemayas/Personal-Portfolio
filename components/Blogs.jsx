"use client";
import React from "react";
import { SectionWrapper } from "@/lib/hoc";
import { fadeIn, textVariant } from "@/lib/utils/motion";
import { styles } from "@/app/style";
import { motion } from "framer-motion";
import { sortPosts, allCoreContent } from "pliny/utils/contentlayer.js";
import { allBlogs } from "contentlayer/generated";
import BlogListDisplayCard from "@/components/BlogListDisplayCard";
const tagColorList = [
  "green-text-gradient",
  "pink-text-gradient",
  "orange-text-gradient",
];

const Blogs = () => {
  const blogDescription = `Below are a few selected blog posts that demonstrate my skills and experience, showcasing real-world examples of my work. Each post is accompanied by a brief description and relevant links. These blogs serve as tangible evidence of my ability to tackle intricate challenges, adapt to various technologies, and efficiently handle project management.`;
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);
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
      {posts.length ? (
        <div className=" mt-20 flex flex-wrap justify-center gap-7">
          {posts.slice(0, 3).map((blog) => (
            <BlogListDisplayCard key={`BlogListCard-${blog.title}`} {...blog} />
          ))}
        </div>
      ) : (
        <h1></h1>
      )}
    </>
  );
};

export default SectionWrapper(Blogs, "blogs");
