import {useState,useEffect} from 'react'
import axios from 'axios'

function App(){

  const [tareas,setTareas] = useState([])
  const [descripcion,setDescripcion] = useState('')
  const [estado,setEstado] = useState('pendiente')
  const [id,setId] = useState(0)
  const [pos,setPos] = useState(null);

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
      "estado":estado
    }
    axios.post('http://127.0.0.1:8000/tarea',datos)
    .then(res=>{
      var temp = tareas;
      temp.push(res.data);
      setTareas(temp);
      setDescripcion('')
      setEstado('pendiente')
    }).catch((error)=>{
      console.log(error.toString());
    })
  }

  function mostrar(cod,index){
    axios.get('http://127.0.0.1:8000/tarea/'+cod)
    .then(res=>{
      setPos(index);
      setId(res.data.id)
      setDescripcion(res.data.descripcion)
      setEstado(res.data.estado)
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
                  <td><a href="#" onClick={()=>mostrar(tarea.id,index)}>{tarea.id}</a></td>
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
        Nueva Tarea : <input type="text" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)}/><br/>
        Estado : <select onChange={(e)=>setEstado(e.target.value)}>
                  <option value="pendiente">Pendiente</option>
                  <option value="completado">Completado</option>
                 </select><br/>
        <input type="submit" value="AGREGAR TAREA"/>
      </form>
    </div>
  )
}

export default App;