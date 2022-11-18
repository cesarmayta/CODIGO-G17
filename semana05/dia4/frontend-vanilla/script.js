function cargarTareas(){

        //data de prueba
        const productos = [{
            id: 1,
            nombre: "Preparar Clase React"
        },
        {
            id: 2,
            nombre: "Tomar Examen 4to ciclo"
        }
        ];

        fetch('http://localhost:5000/tarea')
        .then((response) => response.json())
        .then((data) => {
            tareas = data.content;
            console.log(data.content);
            }
            );

        // Ahora dibujamos la tabla
        const $cuerpoTabla = document.querySelector("#cuerpoTabla");
        // Recorrer todos los productos
        productos.forEach(producto => {
                // Crear un <tr>
                const $tr = document.createElement("tr");
                // Creamos el <td> del codigo
                let $tdId = document.createElement("th");
                $tdId.textContent = producto.id; // el textContent del td es el nombre
                $tr.appendChild($tdId);
                // El td de nombre
                let $tdNombre = document.createElement("td");
                $tdNombre.textContent = producto.nombre;
                $tr.appendChild($tdNombre);
                // El td del botón eliminar
                let $tdBotones = document.createElement("td");
                $tdBotones.innerHTML = '<button type="submit" class="btn btn-danger">Eliminar</button>';
                $tr.appendChild($tdBotones);
                // Finalmente agregamos el <tr> al cuerpo de la tabla
                $cuerpoTabla.appendChild($tr);
                // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
        });
}
cargarTareas();