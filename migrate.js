require('dotenv').config();
const fs = require('fs');

const { Client } = require('pg');

async function migrate(){
    const client = new Client();
    await client.connect();

    const sql = fs.readFileSync('./data/data.sql').toString();

    const data = (await client.query(sql)).rows;
    await client.end();
    return data;
}

migrate().then(()=> {
    return console.log("Base de datos Creada.");
}).catch((e)=> {
    console.log(`Error con el codigo ${e}`);
    process.exit();
});