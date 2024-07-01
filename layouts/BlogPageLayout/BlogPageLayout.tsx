"use client";
import { ReactNode } from "react";
import { CoreContent } from "pliny/utils/contentlayer.js";
import type { Authors, Blog } from "contentlayer/generated";
import Link from "@/components/Link";
import PageTitle from "./components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
import Tag from "@/components/Tag";
import Image from "next/image";

interface LayoutProps {
  content: CoreContent<Blog>;
  authorDetails: CoreContent<Authors>[];
  children: ReactNode;
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
}

export default function BlogPageLayout({
  content,
  authorDetails,
  next,
  prev,
  children,
}: LayoutProps) {
  const { toc, slug, title, images, path, filePath, tags } = content;
  const displayImage =
    images && images.length > 0
      ? images[0]
      : "https://picsum.photos/seed/picsum/800/400";
  const basePath = path.split("/")[0];
  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <div className="space-y-1 pb-10 text-center dark:border-gray-700">
            <div className="w-full">
              <div className="relative aspect-[2/1] w-full">
                <Image
                  src={displayImage}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative pt-10">
              <PageTitle>{title}</PageTitle>
            </div>
          </div>

          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <div className="scrollbar-hide top-0 z-50 grid-rows-[auto_1fr] overflow-y-auto pt-10 xl:sticky xl:max-h-screen">
              <TableOfContents tableOfContents={toc} />
              <div className="hidden flex-col xl:flex">
                <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                  <dt className="sr-only">Authors</dt>
                  <dd>
                    <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                      {authorDetails.map((author) => (
                        <li
                          className="flex items-center space-x-2"
                          key={author.name}
                        >
                          {author.avatar && (
                            <Image
                              src={author.avatar}
                              width={38}
                              height={38}
                              alt="avatar"
                              className="h-10 w-10 rounded-full"
                            />
                          )}
                          <dl className="whitespace-nowrap text-sm font-medium leading-5">
                            <dt className="sr-only">Name</dt>
                            <dd className="text-gray-900 dark:text-gray-100">
                              {author.name}
                            </dd>
                            <dt className="sr-only">Twitter</dt>
                            <dd>
                              {author.twitter && (
                                <Link
                                  href={author.twitter}
                                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                >
                                  {author.twitter
                                    .replace("https://twitter.com/", "@")
                                    .replace("https://x.com/", "@")}
                                </Link>
                              )}
                            </dd>
                          </dl>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                <div className="hidden  pt-4 xl:flex xl:pt-8">
                  <Link
                    href={`/${basePath}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label="Back to the blog"
                  >
                    &larr; Back to the blog
                  </Link>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
                {children}
              </div>
            </div>
          </div>

          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              <div className="pt-4 xl:pt-8">
                {next && next.path ? (
                  <Link
                    href={`/${next.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Next post: ${next.title}`}
                  >
                    &larr; {next.title}
                  </Link>
                ) : (
                  <p className="text-primary-500 " aria-label={`No Next post:`}>
                    No more lastest post
                  </p>
                )}{" "}
              </div>
              <div className="pt-4 xl:pt-8">
                {prev && prev.path ? (
                  <Link
                    href={`/${prev.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Previous post: ${prev.title}`}
                  >
                    {prev.title} &rarr;
                  </Link>
                ) : (
                  <p className="text-primary-500 " aria-label={`No Next post:`}>
                    No more previous post
                  </p>
                )}
              </div>
            </div>
          </footer>
        </div>
      </article>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </SectionContainer>
  );
}

const TableOfContents = ({ tableOfContents }) => {
  return (
    <>
      <h2 className="mb-4 text-xl font-bold">Table of Contents</h2>
      <ul className="ml-4 list-disc text-gray-600">
        {tableOfContents.map((item, index) => (
          <li
            key={index}
            className="mb-2"
            style={{ marginLeft: `${(item.depth - 1) * 20}px` }}
          >
            <a
              href={item.url}
              className=" text-primary-500 underline hover:text-primary-600 dark:hover:text-primary-400 text-[1rem]"
              aria-label={` ${item.value}`}
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
