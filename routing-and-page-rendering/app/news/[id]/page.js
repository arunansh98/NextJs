export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  return (
    <>
      <h1>News Details Page</h1>
      <p>News ID: {id}</p>
    </>
  );
}
