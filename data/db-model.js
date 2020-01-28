const db = require('./db-config');

function getRecipes() {
  return db.select('*').from('recipes')
}

function getShoppingList(recipe_id) {
  return db
    .select("ingredient_name")
    .from("ingredients")
    .join("ingredients", "recipes.id", "ingredients.recipe_id")
    .where("recipes.id", '=', recipe_id)
}

// function getInstructions(recipe_id) {

// }

module.exports = {
  getRecipes,
  getShoppingList,
  // getInstructions
}