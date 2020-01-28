const express = require('express');

const db = require('../data/db-model');

const router = express.Router();

// STRETCH - GET - /api/recipes
router.get('/', (req, res, next) => {
  db.getRecipes()
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