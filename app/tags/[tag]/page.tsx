import siteMetadata from "@/data/siteMetadata";
import ListLayout from "@/layouts/ListLayout";
import tagData from "app/tag-data.json";
import { genPageMetadata } from "app/seo";
import { Metadata } from "next";
import { styles } from "@/app/style";

export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Promise<Metadata> {
  const tag = decodeURI(params.tag);
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: "./",
      types: {
        "application/rss+xml": `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  });
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }));
  return paths;
};
function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag);

  return (
    <div className={`${styles.padding} relative z-0`}>
      <ListLayout tags={[tag]} />
    </div>
  );
}
export default TagPage;
