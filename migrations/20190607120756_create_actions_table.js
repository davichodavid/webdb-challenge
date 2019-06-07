exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(table) {
    table.increments();
    table.string("description", 255).notNullable();
    table.text("notes", 255);
    table.boolean("completed").default(false);
    table
      .integer("project_id")
      .unsigned()
      .references("projects.id")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
