const express = require('express');

const recipes = require('./recipeModel');

const router = express.Router();

// STRETCH - GET - /api/recipes
router.get('/', (req, res, next) => {
  recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      next(err);
    })
})

// STRETCH - GET - /api/recipes/:id/shoppingList
// STRETCH - GET - /api/recipes/:id/instructions
// STRETCH - GET - /api/ingredients/:id/recipes

module.exports = router;