const db = require('../data/db-model');

function validateIngredientId(req, res, next) {
  db.findIngredientId(req.params.id)
    .then(ingredient => {
      if (ingredient) {
        next()
      } else {
        res.status(404).json({
          message: "Ingredient not found"
        })
      }
    })
    .catch (err => {
      next(err);
    })
}

module.exports = {
  validateIngredientId
}