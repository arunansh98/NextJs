import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function News() {
  const news = getAllNews();

  let newsContent = <NewsList news={news} />;

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
