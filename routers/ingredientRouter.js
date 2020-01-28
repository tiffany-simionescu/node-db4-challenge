const express = require('express');

const db = require('../data/db-model');
const { validateIngredientId } = require('../middleware/validation');

const router = express.Router();

// STRETCH - GET - /api/ingredients/:id/recipes
// Still can't pull this info from server
router.get('/:id/recipes', validateIngredientId, (req, res, next) => {
  db.getShoppingList(req.params.id)
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