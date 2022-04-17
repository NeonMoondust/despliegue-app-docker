let nombre = document.getElementById('nombre');
let descripcion = document.getElementById('descripcion');

async function insertTodo(){
    const data = {
        nombre: nombre.value,
        descripcion: descripcion.value,
        fecha: new Date()
    };
    axios.post('/todos', data);
};