import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'reactions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'),
      table.integer('post').unsigned().references('posts.id'),
      table.text('comment').notNullable().defaultTo('Vos commentaires'),
      table.integer('like').notNullable().defaultTo(0),

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
