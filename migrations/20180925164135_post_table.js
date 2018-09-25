
exports.up = function(knex, Promise) {
    return knex.schema.createTable('post', (table) =>{
        table.increments();
        table.text('title');
        table.text('content');
        table.text('username');
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post')
};