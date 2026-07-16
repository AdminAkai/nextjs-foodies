import Link from "next/link"

export default function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <Link href='/meals/share'>Share</Link>
      <Link href='/meals/some-meal'>Some Meal</Link>
    </main>
  )
}