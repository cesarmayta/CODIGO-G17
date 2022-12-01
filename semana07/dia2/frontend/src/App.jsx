import {useState,useEffect} from 'react'
import axios from 'axios'

function App(){

  const [tareas,setTareas] = useState([])

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/tarea')
    .then(res=>{
      console.log(res.data);
      setTareas(res.data);
    })
  },[])

  return(
    <div>
      <h1>Lista de Tareas</h1>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>Descripcion</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea,index)=>{
            return (
              <tr key={tarea.id}>
                  <td>{tarea.id}</td>
                  <td>{tarea.descripcion}</td>
                  <td>{tarea.fecha_registro}</td>
                  <td>{tarea.estado}</td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  )
}

export default App;