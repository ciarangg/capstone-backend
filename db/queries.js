
const database = require("./database-connection")

module.exports = {
    getAll() {
        return database('post');
    },
    
    getOne(id) {
        return database('post').where('id', id).first();
    },
    create(postPost) {
        return database('post').insert(postPost).returning('*').then(record => record[0]);
    },
    update(id, post) {
        return database('post').where('id', id).update(post, '*');
    },
    delete(id) {
        return database('post').where('id', id).del();
    }
}