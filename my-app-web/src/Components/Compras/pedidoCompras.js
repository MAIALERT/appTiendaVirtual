import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import CompoInput from '../Input/CompoInput';
import CompoLabel from '../Label/CompoLabel';
import CompoButtonKeep from '../Button/CompoButtonKeep';
import CompoTitulo from '../Titulo/CompoTitulo';

export default class pedidoCompras extends Component {
    state = {
        pedidoCompras: [],
      };
      async componentDidMount() {
        const res = await axios.get("http://localhost:4000/pedidosClientes");
        this.setState({ pedidoCompras: res.data.datos });
        console.log(res);
      }
    
      render() {
        return (
          <div className="py-4">
            <Container>
            <div className="py-1">
              <div className="card">
                 <CompoTitulo titulo="Compras Confirmadas"></CompoTitulo>
                <Form className="py-5 card-body">
                    <div className="form-group row">
                  <Form.Group  className="col-md-4" controlId="formBasicEmail">
                      <CompoLabel titulo="Buscar por Fecha"/>
                      <CompoInput/>
                  </Form.Group>
                  </div>
                   <CompoButtonKeep titulo="Consultar"/>
                </Form>
              </div>
            </div>
    
            {/* Tabla listar roles */}
            <h2 className="py-3">Listado de Compras Confirmadas</h2>
              <Table striped bordered hover variant="dark" className="card-body">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.pedidoCompras.map((pedidoCompra) => (
                    <tr key={pedidoCompra.id}>
                      <td>{pedidoCompra.id}</td>
                      <td>{pedidoCompra.clienteID}</td>
                      <td>{pedidoCompra.total}</td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </div>
        );
      }
}
