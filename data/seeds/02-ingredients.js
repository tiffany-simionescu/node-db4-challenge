exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: 'pasta' },
    // Used for both Spaghetti and Pizza
    { ingredient_name: 'tomato sauce' },
    // Used for both Spaghetti and Pizza
    { ingredient_name: 'cheese' },
    { ingredient_name: 'pizza dough' },
    { ingredient_name: 'vegetable broth' },
    { ingredient_name: 'mixed vegetables' },
  ])
}