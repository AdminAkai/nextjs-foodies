  // a function with this directive will only run on the server
  // only works if the component does not have a 'use client'; directive
'use server';

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals.lib";

const isInvalidInput = (text) => !text || text?.trim() === ''

export const shareMeal = async (_, formData) => {
  const meal = Object.fromEntries(formData);
  let message = null;

  for (const entry in meal) {
    if (entry !== 'image') {
      if (isInvalidInput(meal[entry]) ) message = 'Invalid input.'
      if (entry === 'creator_email' && !meal[entry].includes('@')) message = 'Invalid email.'
    }
    if (entry === 'image' && (!meal[entry] || meal[entry]?.size === 0)) message = 'Invalid image.'
  }

  if (message) {
    return {
      message,
    }
  }

  const mealId = await saveMeal(meal);
  redirect(`/meals/${mealId}`);
}