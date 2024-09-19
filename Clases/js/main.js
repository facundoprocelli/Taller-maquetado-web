import { getTareas, postTarea } from "./api"

import{ tarea } from "../tarea"
import { tarea } from "../tarea/tarea";


document.addEventListener('DOMContentLoaded', async () => {

    try {
        const lista = await getTareas();
    }catch (error){
        console.log(error);

    }
});

function crearTabla(lista) {
    lista.forEach( tarea => {
        crearFila(tarea);
    });

}

function crearFila() {
    const tr = document.createElement('tr');
    const tdNombre = document.createElement('td');
    tdNombre.textContent = tarea.nombre;
    const tdId = document.createElement('td');
    tdId.textContent = tarea.id;
    const lista = document.getElementById('listaTareas')

    tr.append(tdId, tdNombre);

    lista.appendChild(tr);
}


const formulario = document.getElementById('formulario');
const input = document.getElementById('tarea');

formulario.addEventListener('submit',  async() => {

try {
    const tarea = new tarea(input.value);
    await postTarea(tarea)
} catch (error) {
    
}
});