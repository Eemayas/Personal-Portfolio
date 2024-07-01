var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// data/siteMetadata.js
var require_siteMetadata = __commonJS({
  "data/siteMetadata.js"(exports, module) {
    var siteMetadata2 = {
      title: "Prashant | Protfoilo",
      author: "Prashant Manandhar",
      headerTitle: "Prashant | Protfoilo",
      description: "Personal Portfoilo of Prashant Manandhar",
      language: "en-us",
      theme: "system",
      // system, dark or light
      siteUrl: "https://eemayas.vercel.app/",
      siteRepo: "https://github.com/Eemayas/Personal-Portfolio",
      siteLogo: "/assets/Favicon/apple-touch-icon.png",
      socialBanner: "/static/images/twitter-card.png",
      mastodon: "https://mastodon.social/@mastodonuser",
      email: "prashantmanandhar2002@gmail.com ",
      github: "https://github.com/Eemayas",
      x: "https://x.com/PrashantManand8",
      facebook: "https://www.facebook.com/prashant.manandhar.88/",
      youtube: "https://www.youtube.com/channel/UC48ObF2A5sOK02kZWwZ4PEQ",
      linkedin: "https://www.linkedin.com/in/prashant-manandhar/",
      threads: "https://www.threads.net/@prashant__manandhar",
      instagram: "https://www.instagram.com/prashant__manandhar/",
      locale: "en-US"
      // analytics: {
      //   umamiAnalytics: {
      //     umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      //   },
      // },
      // newsletter: {
      //   provider: "buttondown",
      // },
      // comments: {
      //   provider: "giscus", // supported providers: giscus, utterances, disqus
      //   giscusConfig: {
      //     repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      //     repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      //     category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      //     categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      //     mapping: "pathname", // supported options: pathname, url, title
      //     reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
      //     metadata: "0",
      //     theme: "light",
      //     // theme when dark mode
      //     darkTheme: "transparent_dark",
      //     themeURL: "",
      //     lang: "en",
      //   },
      // },
      // search: {
      //   provider: "kbar", // kbar or algolia
      //   kbarConfig: {
      //     searchDocumentsPath: "search.json", // path to load documents to search
      //   },
      // },
    };
    module.exports = siteMetadata2;
  }
});

// contentlayer.config.ts
var import_siteMetadata = __toESM(require_siteMetadata());
import {
  defineDocumentType,
  makeSource
} from "contentlayer2/source-files";
import { writeFileSync } from "fs";
import readingTime from "reading-time";
import { slug } from "github-slugger";
import path from "path";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
  extractTocHeadings
} from "pliny/mdx-plugins/index.js";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeCitation from "rehype-citation";
import rehypePrismPlus from "rehype-prism-plus";
import rehypePresetMinify from "rehype-preset-minify";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";
var root = process.cwd();
var isProduction = process.env.NODE_ENV === "production";
var icon = fromHtmlIsomorphic(
  `
  <span class="content-header-link">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 linkicon">
  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
  </svg>
  </span>
`,
  { fragment: true }
);
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, "")
  },
  path: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  },
  filePath: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFilePath
  },
  toc: { type: "string", resolve: (doc) => extractTocHeadings(doc.body.raw) }
};
function createTagCount(allBlogs) {
  const tagCount = {};
  allBlogs.forEach((file) => {
    if (file.tags && (!isProduction || file.draft !== true)) {
      file.tags.forEach((tag) => {
        const formattedTag = slug(tag);
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });
  writeFileSync("./app/tag-data.json", JSON.stringify(tagCount));
}
function createSearchIndex(allBlogs) {
  if (import_siteMetadata.default?.search?.provider === "kbar" && import_siteMetadata.default.search.kbarConfig.searchDocumentsPath) {
    writeFileSync(
      `public/${import_siteMetadata.default.search.kbarConfig.searchDocumentsPath}`,
      JSON.stringify(allCoreContent(sortPosts(allBlogs)))
    );
    console.log("Local search index generated...");
  }
}
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] },
    lastmod: { type: "date" },
    draft: { type: "boolean" },
    summary: { type: "string" },
    images: { type: "json" },
    authors: { type: "list", of: { type: "string" } },
    layout: { type: "string" },
    bibliography: { type: "string" },
    canonicalUrl: { type: "string" }
  },
  computedFields: {
    ...computedFields,
    structuredData: {
      type: "json",
      resolve: (doc) => ({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        image: doc.images ? doc.images[0] : import_siteMetadata.default.socialBanner,
        url: `${import_siteMetadata.default.siteUrl}/${doc._raw.flattenedPath}`
      })
    }
  }
}));
var Authors = defineDocumentType(() => ({
  name: "Authors",
  filePathPattern: "authors/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: { type: "string", required: true },
    avatar: { type: "string" },
    occupation: { type: "string" },
    company: { type: "string" },
    email: { type: "string" },
    twitter: { type: "string" },
    linkedin: { type: "string" },
    github: { type: "string" },
    layout: { type: "string" }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, Authors],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      remarkGfm,
      remarkCodeTitles,
      remarkMath,
      remarkImgToJsx
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          headingProperties: {
            className: ["content-header"]
          },
          content: icon
        }
      ],
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, "data") }],
      [rehypePrismPlus, { defaultLanguage: "js", ignoreMissing: true }],
      rehypePresetMinify
    ]
  },
  onSuccess: async (importData) => {
    const { allBlogs } = await importData();
    createTagCount(allBlogs);
    createSearchIndex(allBlogs);
  }
});
export {
  Authors,
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-DSCXI7ZB.mjs.map
