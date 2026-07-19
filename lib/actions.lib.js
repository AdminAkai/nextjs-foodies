  // a function with this directive will only run on the server
  // only works if the component does not have a 'use client'; directive
'use server';

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals.lib";

export const shareMeal = async (formData) => {
  const meal = Object.fromEntries(formData);

  const mealId = await saveMeal(meal);
  redirect(`/meals/${mealId}`);
}