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
router.get('/:id/shoppingList', (req, res, next) => {
  const { id } = req.params;
  db.getShoppingList(id)
  .then(recipes => {
    res.status(200).json(recipes);
  })
  .catch(err => {
    next(err)
  });
});

// STRETCH - GET - /api/recipes/:id/instructions
router.get('/:id/instructions', (req, res, next) => {
  const { id } = req.params;
  db.getInstructions(id)
    .then(instructions => {
      res.status(200).json(instructions)
    })
    .catch(err => {
      next(err);
    })
})

module.exports = router;