import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Card,Button,Table,Form} from 'react-bootstrap';
import axios from 'axios';

function App() {
    return(
      <>
      <Container>
        <Row>
          <Col>
          <Card>
            <Card.Body>
              <h2>Lista de Tareas</h2>
              <Table>
                <thead>
                  <tr>
                    <th scope="col">Nro.</th>
                    <th scope="col">Tarea</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Tarea 1</td>
                    <td></td>
                  </tr>
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
