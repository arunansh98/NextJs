import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
  const newsSlug = await params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="full-screen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
