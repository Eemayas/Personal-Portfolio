import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";
import Tag from "@/components/Tag";
import { formatDate } from "pliny/utils/formatDate";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React from "react";
import { fadeIn } from "@/lib/utils/motion";
import { DisableAnimationOnMobile } from "@/components/DisableAnimationOnMobile";
const randomImgUrl = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const BlogListDisplayCard = ({ slug, date, title, tags, summary, images }) => {
  const index = Math.floor(Math.random() * 1000) % randomImgUrl.length;
  images = images ? images[0] : randomImgUrl[index];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  return (
    <DisableAnimationOnMobile>
      <motion.div
        ref={ref}
        initial="hidden"
        variants={fadeIn("up", "spring", 0.25, 0.75)}
        animate={isInView ? "show" : {}}
        className="green-pink-gradient my-8 w-full rounded-[30px] p-[2px] shadow-card dark:shadow-card-dark"
      >
        <div className="space-y-2 rounded-[28px] dark:bg-tertiary bg-tertiarylight p-6 hover:bg-gray-200 dark:hover:bg-gray-900 ">
          <div className="flex flex-col items-center space-x-4 md:flex-row divide-gray-500 md:divide-x-1 divide-y-1 md:divide-y-0">
            <div className="h-64 w-64 rounded-3xl object-fill shadow-lg">
              <Image
                width={200}
                height={200}
                src={images}
                alt={`Image of ${title}`}
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
            <div className="mt-8 w-full sm:w-[60%] md:mt-0 md:pl-8">
              <time dateTime={date}>
                {formatDate(date, siteMetadata.locale)}
              </time>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-gray-900 dark:text-gray-100"
                    >
                      {title}
                    </Link>
                  </h2>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                    {summary}
                  </div>
                </div>
                <div className="text-base font-medium leading-6">
                  <Link
                    href={`/blog/${slug}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 "
                    aria-label={`Read more: "${title}"`}
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </DisableAnimationOnMobile>
  );
};

export default BlogListDisplayCard;
