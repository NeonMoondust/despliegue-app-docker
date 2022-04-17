const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening PORT: ${PORT}.`));

const { getTodos, postTodo, deleteTodo } = require('./queries');

app.use(express.json());

//#region View Engine Misc -------
app.use(express.static('public'));

app.set("view engine", ".hbs");

app.engine("hbs", hbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/partials/",
    extname: ".hbs",
}));
// #endregion

app.get('/', (request, response) => {
    response.render('index',{layout: 'index',});
});

app.get('/todo-create', (request, response) => {
    response.render('createTodo',{layout: 'createTodo'});
});

app.get('/todos', async (request, response) => {
    const todos = await getTodos();
    response.send(todos);
});

app.post('/todos', async (request, response) => {
    const { nombre, descripcion } = request.body;
    await postTodo(nombre, descripcion);
    response.render('createTodo',{layout: 'createTodo'});
});

app.delete('/todos/:id', async (request, response) => {
    const { id } = request.params;
    const data = await deleteTodo(id);
    response.sendStatus(200);
});

//#region Wildcard routes
app.get('*', (request, response) =>{
    response.render('404',{
        layout: '404',
    });
});
//#endregion