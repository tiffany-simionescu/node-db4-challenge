const db = require('./db-config');

function getRecipes() {
  return db('recipes')
}

function getShoppingList(recipe_id) {
  return db('recipes_ingredients as ri')
    .select('ingredients.ingredient_name')
    .where({ recipe_id })
    .join('ingredients', 'ingredients.id', 'ri.ingredient_id')  
}

function getInstructions(recipe_id) {
  return db('instructions as i')
    .select('recipes.recipe_name', 'i.step')
    .where({ recipe_id })
    .join('recipes', 'recipes.id', 'i.recipe_id')
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}