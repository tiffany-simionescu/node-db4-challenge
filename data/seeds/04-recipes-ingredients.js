exports.seed = function(knex, Promise) {
  return knex('recipes-ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 1, measurement: "cup" },
    { recipe_id: 1, ingredient_id: 2, quantity: 1, measurement: "cup" },
    { recipe_id: 1, ingredient_id: 3, quantity: 1, measurement: "cup" },
    { recipe_id: 2, ingredient_id: 2, quantity: 1, measurement: "cup" },
    { recipe_id: 2, ingredient_id: 3, quantity: 1, measurement: "cup" },
    { recipe_id: 2, ingredient_id: 4, quantity: 1, measurement: "cup" },
    { recipe_id: 3, ingredient_id: 5, quantity: 1, measurement: "cup" },
    { recipe_id: 3, ingredient_id: 6, quantity: 1, measurement: "cup" },
  ])
}