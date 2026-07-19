import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

import { notFound } from 'next/navigation';

const db = sql('meals.db');

export const getMeals = async () => {
  // sqlite is not asynchronous by default, simulate async data fetch here to test fallback and suspense
  await new Promise(resolve => {
    setTimeout(resolve, 2000)
  })

  // Simulate error to test NextJS reserved filename error.js and error handling
  // threw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}

// sqlite is local therefore this does not technically need to be asynchronous and does not need to return a promise
// the get function above is asynchronous for demonstrative purposes
export const getMeal = (id) => {
  // slug is id, the pre-made db schema says slug but I prefer the term ID for uniquely identifying items
  // the get function helps prevent sql injection attacks - "?" is a reserved character in sqlite3 for dynamic values
  const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(id)
  if (!meal) {
    notFound()
  };

  return meal
}

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error('Saving image failed.');
  });

  // removing "public" from the filepath as all requests for image will be sent to the public folder automatically anyways
  // public is served as if it's the root level of the server
  meal.image = `/images/${fileName}`;

  /* 
    the @ (and ? in a different SQL statement) in VALUES is a better-sqlite specific syntax 
    for safe dynamic values without exposing the SQL statement to SQL injection attacks,
    the order of the VALUES values and INSERT values must be the same

    .run() can now just take a normal javascript object and parse each key/value pair
    to the placeholder value in VALUES
  */
  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (@title, @summary, @instructions, @creator, @creator_email, @slug)
  `).run(meal)
}