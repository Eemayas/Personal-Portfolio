"use client";
import ListLayout from "@/layouts/ListLayout";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";
import { allBlogs } from "contentlayer/generated";
import { genPageMetadata } from "app/seo";
import { fadeIn, textVariant } from "@/lib/utils/motion";
import { styles } from "@/app/style";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/lib/hoc";
import { useEffect, useState } from "react";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";

// export const metadata = genPageMetadata({ title: "Blog" });

function BlogPage() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [POSTS_PER_PAGE, setPOSTS_PER_PAGE] = useState(2);
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isHome = !window.location.href.includes("blog");
      setIsHomePage(isHome);
      !isHome ? setPOSTS_PER_PAGE(5) : "";
    }
  }, []);

  return (
    <>
      <DisableAnimationOnMobile>
        <motion.div initial="hidden" animate="show" variants={textVariant()}>
          <p className={styles.sectionSubText}>Latest updates</p>
          <h2 className={styles.sectionHeadText}>Blogs</h2>
        </motion.div>
      </DisableAnimationOnMobile>
      <div className="w-full flex">
        <DisableAnimationOnMobile>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-[17px] max-w-3xl leading-[30px] "
          >
            {blogDescription}
          </motion.p>
        </DisableAnimationOnMobile>
      </div>
      <DisableAnimationOnMobile>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn("", "", 0.1, 1)}
        >
          <ListLayout
            isHomePage={isHomePage}
            posts={posts}
            initialDisplayPosts={initialDisplayPosts}
            pagination={pagination}
            title="All Posts"
          />
        </motion.div>
      </DisableAnimationOnMobile>
    </>
  );
}

export default SectionWrapper(BlogPage, "blogPage");
