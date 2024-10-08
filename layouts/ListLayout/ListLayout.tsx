"use client";
import { useEffect, useState } from "react";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";
import { allBlogs, type Blog } from "contentlayer/generated";
import BlogListDisplayCard from "./components/BlogListDisplayCard";
import tagData from "app/tag-data.json";
import Pagination from "./components/Pagination";

interface ListLayoutProps {
  tags?: any[];
}

export default function ListLayout({ tags = [] }: ListLayoutProps) {
  const [isHomePage, setIsHomePage] = useState(true);
  const [POSTS_PER_PAGE, setPOSTS_PER_PAGE] = useState(2);

  const [searchValue, setSearchValue] = useState("");
  const [selectedTags, setSelectedTags] = useState(tags);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isHome =
        !window.location.href.includes("blog") &&
        !window.location.href.includes("tag");
      setIsHomePage(isHome);
      !isHome ? setPOSTS_PER_PAGE(5) : "";
    }
  }, []);
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

  // Filter posts by search value
  const filteredBySearchValue = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags?.join(" ");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  // Filter posts by selected tags, ensuring all tags match
  const filteredBlogPosts = filteredBySearchValue.filter((post) => {
    if (selectedTags.length === 0) return true;
    return selectedTags.every((tag) => post.tags.includes(tag));
  });

  // Display initial posts if no search value, no selected tags, and initialDisplayPosts exist
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue && selectedTags.length === 0
      ? initialDisplayPosts
      : filteredBlogPosts;

  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  console.log(isHomePage);
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {!isHomePage ? (
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <div className="flex gap-3 flex-col sm:flex-row">
              <div className="relative max-w-lg flex-1">
                <label>
                  <span className="sr-only">Search articles</span>
                  <input
                    aria-label="Search articles"
                    type="text"
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search articles"
                    className="block w-full rounded-md border border-gray-200 dark:bg-tertiary  bg-tertiarylight px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500  dark:text-gray-100"
                  />
                </label>
                <svg
                  className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button
                aria-label="Filter tag"
                className="bg-tertiary px-8 rounded-xl outline-none w-fit shadow-md shadow-primary"
                onClick={toggleOptions}
              >
                Filter Tags
              </button>
            </div>

            {showOptions && sortedTags && (
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {sortedTags.map((tag, index) => (
                  <div
                    key={index}
                    onClick={() => handleTagClick(tag)}
                    className={`rounded-3xl p-2 px-4 border-1 dark:border-gray-500  border-gray-200 uppercase ${
                      selectedTags.includes(tag)
                        ? "bg-purple-500"
                        : "dark:bg-tertiary bg-tertiarylight "
                    } cursor-pointer`}
                  >
                    {tag} {` (${tagCounts[tag]})`}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          ""
        )}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!filteredBlogPosts.length && "No posts found."}
          {displayPosts.map((post) => {
            const { slug, path, date, title, summary, tags, images } = post;
            return (
              <li key={`BlogListCardList-${title}`}>
                <BlogListDisplayCard
                  key={`BlogListCard-${title}`}
                  slug={slug}
                  date={date}
                  title={title}
                  tags={tags}
                  summary={summary}
                  images={images}
                />
              </li>
            );
          })}
        </ul>
      </div>
      {!isHomePage &&
        pagination &&
        pagination.totalPages > 1 &&
        !searchValue && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
          />
        )}
    </>
  );
}
