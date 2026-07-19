import sql from 'better-sqlite3';

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
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(id)
}