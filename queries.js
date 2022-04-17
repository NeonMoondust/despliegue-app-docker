require('dotenv').config()

const { Client } = require('pg');

async function postTodo(nombre, descripcion){
    const client = new Client();
    try {
        await client.connect();
        return (await client.query(`INSERT INTO todos (nombre, descripcion) VALUES ('${nombre}','${descripcion}') RETURNING*`)).rows;
    } catch (e) {
        return e;
    }finally{
        await client.end();
    }
};

const getTodos = async() => {
    const client = new Client();
    try {
        await client.connect();
        return (await client.query(`SELECT * FROM todos`)).rows;
    } catch (e) {
        return e;
    }finally{
        await client.end();
    }
};

const deleteTodo = async (id) => {
    const client = new Client();
    try {
        await client.connect();
        return (await client.query(`DELETE FROM todos WHERE id = '${id}'`)).rowCount;
    } catch (e) {
        return e;
    }finally{
        await client.end();
    }
};

module.exports = {
    postTodo,
    getTodos,
    deleteTodo
}