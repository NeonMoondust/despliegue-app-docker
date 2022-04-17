let tbody = document.getElementById('table');

async function getTodos(){
    let data = await fetch('/todos',{method:"get"});
    data = await data.json();
    tbody.innerHTML = "";

    data.forEach((todo, index) => {
        tbody.innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>${todo.nombre}</td>
      <td>${todo.descripcion}</td>
      <td>${todo.fecha}</td>
      <td><button class="btn btn-danger" onclick="deleteTodo('${todo.id}')">Eliminar</button></td>
    </tr>
        `;
    });
};


async function deleteTodo(id){
  await axios.delete('/todos/' + id);
  getTodos();
};

getTodos();