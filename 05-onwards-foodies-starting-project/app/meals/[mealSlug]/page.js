export default function MealDetailsPage({ params }) {
  const { mealSlug } = params;
  return (
    <main>
      <h1>Meal Details Page</h1>
      <h1>{mealSlug}</h1>
    </main>
  );
}
