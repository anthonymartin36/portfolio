<<<<<<< HEAD
export async function up(knex) {
=======
export async function up (knex) {
>>>>>>> ddf4ccb (feat: migrated boilerplate-fullstack-query)
  return knex.schema.createTable('fruit', (table) => {
    table.increments('id')
    table.string('name')
  })
}

<<<<<<< HEAD
export async function down(knex) {
=======
export async function down (knex) {
>>>>>>> ddf4ccb (feat: migrated boilerplate-fullstack-query)
  return knex.schema.dropTable('fruit')
}
