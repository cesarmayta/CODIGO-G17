import {useState,useEffect} from 'react'
import axios from 'axios'

function App(){

  const [tareas,setTareas] = useState([])
  const [descripcion,setDescripcion] = useState('')

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/tarea')
    .then(res=>{
      console.log(res.data);
      setTareas(res.data);
    })
  },[])

  function guardar(e){
    e.preventDefault();
    let datos = {
      "descripcion":descripcion,
      "fecha_registro":new Date(),
      "estado":"pendiente" 
    }
    axios.post('http://127.0.0.1:8000/tarea',datos)
    .then(res=>{
      var temp = tareas;
      temp.push(res.data);
      setTareas(temp);
      setDescripcion('')
    }).catch((error)=>{
      console.log(error.toString());
    })
  }

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
      <form onSubmit={guardar}>
        {descripcion}<br/>
        Nueva Tarea : <input type="text" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)}/>
        <input type="submit" value="AGREGAR TAREA"/>
      </form>
    </div>
  )
}

export default App;