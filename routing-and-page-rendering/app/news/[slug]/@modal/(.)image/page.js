import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  const newsSlug = await params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="full-screen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
