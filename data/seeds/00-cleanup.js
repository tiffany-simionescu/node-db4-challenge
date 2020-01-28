// const cleaner = require('knex-cleaner');

// exports.seed = function(knex) {
//   return cleaner.clean(knex, {
//     mode: 'truncate', // resets ids
//     ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
//   });
// };

// Jason Maurer claims this is easier:

exports.seed = async (knex) => {
  await knex("recipes-ingredients").truncate()
  await knex("instructions").truncate()
  await knex("ingredients").truncate()
  await knex("recipes").truncate()
}