function cargarTareas(){
        fetch('http://localhost:5000/tarea')
            .then(res => res.json())
            .then((data) => {
                tareas = data.content
                console.log(tareas);
            
                // Ahora dibujamos la tabla
                const $cuerpoTabla = document.querySelector("#cuerpoTabla");
                // Recorrer todos los productos
                tareas.forEach(tarea => {
                        // Crear un <tr>
                        const $tr = document.createElement("tr");
                        // Creamos el <td> del codigo
                        let $tdId = document.createElement("td");
                        $tdId.textContent = tarea.id; // el textContent del td es el nombre
                        $tr.appendChild($tdId);
                        // El td de nombre
                        let $tdNombre = document.createElement("td");
                        $tdNombre.textContent = tarea.descripcion;
                        $tr.appendChild($tdNombre);
                        // El td de estado
                        let $tdEstado = document.createElement("td");
                        $tdEstado.textContent = tarea.estado;
                        $tr.appendChild($tdEstado);
                        // El td del botón eliminar
                        //let $tdBotones = document.createElement("td");
                        //$tdBotones.innerHTML = '<button type="submit" class="btn btn-danger">Eliminar</button>';
                        //$tr.appendChild($tdBotones);
                        // Finalmente agregamos el <tr> al cuerpo de la tabla
                        $cuerpoTabla.appendChild($tr);
                        // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
                })
        });
}
cargarTareas();