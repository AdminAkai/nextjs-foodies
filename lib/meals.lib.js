import sql from 'better-sqlite3';

const db = sql('meals.db');

export const getMeals= async () => {
  // sqlite is not asynchronous by default, simulate async data fetch here to test fallback and suspense
  await new Promise(resolve => {
    setTimeout(resolve, 2000)
  })
  return db.prepare('SELECT * FROM meals').all();
}