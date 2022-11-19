import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container,Button,Form} from 'react-bootstrap'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = ({
      tareas : [],
      descripcion : '',
      estado : 'pendiente'
    })
    this.cambioDescripcion = this.cambioDescripcion.bind(this);
    this.guardar = this.guardar.bind(this);
    this.eliminar = this.eliminar.bind(this);
  }

  cambioDescripcion(e){
    //console.log(e.target.value);
    this.setState({
      descripcion : e.target.value
    })
  }

  guardar(e){
    e.preventDefault();
    const dataTarea = {
      descripcion : this.state.descripcion,
      estado : this.state.estado
    }
    //console.log(dataTarea)
    //registro de nueva tarea
    axios.post('http://localhost:5000/tarea',dataTarea)
    .then(res =>{
      console.log(res.data.content);
      this.state.tareas.push(res.data.content)
      var temp = this.state.tareas
      this.setState({
        descripcion:'',
        tareas:temp
      }).catch((error)=>{
        alert(error.toString());
      })
    })
  }

  eliminar(cod){
    axios.delete('http://127.0.0.1:5000/tarea/'+cod)
    .then(res=>{
      var temp = this.state.tareas.filter((tarea)=>tarea.id !== cod);
      this.setState({
        tareas:temp
      })
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
        <Container>
          <h1>Lista de Tareas</h1>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Tarea</th>
                <th>Estado</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tareas.map((tarea)=>{
                return(
                  <tr key={tarea.id}>
                    <td>{tarea.id}</td>
                    <td>{tarea.descripcion}</td>
                    <td>{tarea.estado}</td>
                    <td><Button variant="danger" onClick={()=>this.eliminar(tarea.id)}>Eliminar</Button></td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <h1>Agregar Tarea</h1>
          <Form onSubmit={this.guardar}>
            <Form.Group className="mb-3">
              <Form.Control type="text" value={this.state.descripcion} onChange={this.cambioDescripcion} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default App;