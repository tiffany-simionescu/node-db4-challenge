
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.string("recipe_name").notNullable()
  })

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id")
    table.string("ingredient_name").notNullable()
  })

  await knex.schema.createTable("instructions", (table) => {
    table.increments("id")
    table.string("step")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
    table.integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
  })

  await knex.schema.createTable("recipes-ingredients", (table) => {
    table.integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
    table.integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
    table.float("quantity", [0]).notNullable()
    table.string("measurement").notNullable()
    table.primary(["recipe_id", "ingredient_id"])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes-ingredients")
  await knex.schema.dropTableIfExists("instructions")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
