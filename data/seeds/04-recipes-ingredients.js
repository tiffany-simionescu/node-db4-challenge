exports.seed = function(knex, Promise) {
  return knex('recipes-ingredients').insert([
    { recipe_id: 1, ingredient_id: 1 },
    { recipe_id: 1, ingredient_id: 2 },
    { recipe_id: 1, ingredient_id: 3 },
    { recipe_id: 2, ingredient_id: 2 },
    { recipe_id: 2, ingredient_id: 3 },
    { recipe_id: 2, ingredient_id: 4 },
    { recipe_id: 3, ingredient_id: 5 },
    { recipe_id: 3, ingredient_id: 6 },
  ])
}