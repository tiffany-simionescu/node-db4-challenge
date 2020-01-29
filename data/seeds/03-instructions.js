exports.seed = function(knex, Promise) {
  return knex('instructions').insert([
    { step: "Step One for Spaghetti", recipe_id: 1 },
    { step: "Step Two for Spaghetti", recipe_id: 1 },
    { step: "Step Three for Spaghetti", recipe_id: 1 },
    { step: "Step One for Pizza", recipe_id: 2 },
    { step: "Step Two for Pizza", recipe_id: 2 },
    { step: "Step Three for Pizza", recipe_id: 2 },
    { step: "Step One for Vegetable Soup", recipe_id: 3 },
    { step: "Step Two for Vegetable Soup", recipe_id: 3 },
    { step: "Step Three for Vegetable Soup", recipe_id: 3 },
  ])
}