import React from 'react';
import axios from 'axios';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = ({
      tareas : []
    })
  }

  componentDidMount(){
    console.log("cargando tareas...")
    axios.get('http://127.0.0.1:5000/tarea')
    .then(res=>{
      console.log(res.data.content);
      this.setState({
        tareas : res.data.content
      })
    })
  }

  render(){
    return(
      <div>
        <h1>Lista de Tareas</h1>
        <table border="1">
          <tr>
            <th>Id</th>
            <th>Tarea</th>
            <th>Estado</th>
          </tr>
          {this.state.tareas.map((tarea)=>{
            return(
              <tr key={tarea.id}>
                <td>{tarea.id}</td>
                <td>{tarea.descripcion}</td>
                <td>{tarea.estado}</td>
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}

export default App;