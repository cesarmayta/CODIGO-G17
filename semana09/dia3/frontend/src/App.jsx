import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Card,Button,Table,Form} from 'react-bootstrap';
import axios from 'axios';

function App() {
    const [tareas,setTareas] = useState([]);
    const [descripcion,setDescripcion] = useState('');
    const [estado,setEstado] = useState('pendiente');

    useEffect(()=>{
      axios.get('http://localhost:5000/tarea')
      .then(res=>{
        console.log(res.data.content);
        setTareas(res.data.content);
      })
    },[])

    return(
      <>
      <Container>
        <Row>
          <Col>
          <Card>
            <Card.Body>
              <center><h2>Lista de Tareas</h2></center>
              <Col className="col-12">
                <Form>
                  <div className='form-outline'>
                    <input type="text" className='form-control' onChange={(e)=>setDescripcion(e.target.value)} />
                  </div>
                  <div className='form-outline'>
                    <Button type='submit' className='btn btn-primary'>Agregar Tarea</Button>
                  </div>
                </Form>
              </Col>
              <Table>
                <thead>
                  <tr>
                    <th scope="col">Nro.</th>
                    <th scope="col">Tarea</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    tareas.map((tarea,index) =>(
                      <tr key={tarea._id}>
                        <td>{index + 1}</td>
                        <td>{tarea.descripcion}</td>
                        <td>{tarea.estado}</td>
                        <td></td>
                      </tr>
                    ))
                  }
                  
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      </>
    )
}

export default App
