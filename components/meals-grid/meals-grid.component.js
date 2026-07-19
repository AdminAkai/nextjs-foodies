'use client';

import { useMemo } from "react"

import styles from "./meals-grid.module.css"
import MealItem from "../meal-item";

export default function MealsGrid({ meals }) {
  const mealListItems = useMemo(
    () => 
      meals.map(meal => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      )), [meals])

  return (
    <ul className={styles.meals}>
      {mealListItems}
    </ul>
  )
}