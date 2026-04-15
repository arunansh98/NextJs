import NewsList from "@/components/news-list";

export default async function News() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news.");
  }

  const news = await response.json();

  let newsContent = <NewsList news={news} />;

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
