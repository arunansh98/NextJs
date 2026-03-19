import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default async function FilteredNewsPage({ params }) {
  const newsYear = await params.year;
  const news = getNewsForYear(newsYear);
  return <NewsList news={news} />;
}
