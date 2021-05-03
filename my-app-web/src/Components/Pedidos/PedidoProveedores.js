import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import CompoInput from '../Input/CompoInput';
import CompoLabel from '../Label/CompoLabel';
import CompoButtonKeep from '../Button/CompoButtonKeep';
import CompoTitulo from '../Titulo/CompoTitulo';

export default class PedidoProveedores extends Component {
    state = {
        PedidoProveedores: [],
      };
      async componentDidMount() {
        const res = await axios.get("http://localhost:4000/pedidosProveedores");
        this.setState({ PedidoProveedores: res.data.datos });
        console.log(res);
      }
    
      render() {
        return (
          <div className="py-4">
            <Container>
            <div className="py-1">
              <div className="card">
                 <CompoTitulo titulo="Pedidos a Proveedores"></CompoTitulo>
                <Form className="py-5 card-body">
                    <div className="form-group row">
                  <Form.Group  className="col-md-6" controlId="formBasicEmail">
                      <CompoLabel titulo="Producto"/>
                      <CompoInput/>
                  </Form.Group>
                  <Form.Group className="col-md-6"  controlId="formBasicPassword">
                    <CompoLabel titulo="Proveedor"/>
                    <CompoInput/>
                  </Form.Group>
                  <Form.Group className="col-md-6"  controlId="formBasicPassword">
                    <CompoLabel titulo="Cantidad"/>
                    <CompoInput/>
                  </Form.Group>
                  </div>
                   <CompoButtonKeep titulo="Guardar"/>
                </Form>
              </div>
            </div>
    
            {/* Tabla listar roles */}
            <h2 className="py-3">Listado de Pedidos</h2>
              <Table striped bordered hover variant="dark" className="card-body">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Producto</th>
                    <th>Proveedor</th>
                    <th>Cantidad</th>
                    <th>Fecha de Pedido</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.PedidoProveedores.map((pedidoProveedor) => (
                    <tr key={pedidoProveedor.id}>
                      <td>{pedidoProveedor.id}</td>
                      <td>{pedidoProveedor.productoID}</td>
                      <td>{pedidoProveedor.proveedorID}</td>
                      <td>{pedidoProveedor.cantidadProducto}</td> 
                      <td>{pedidoProveedor.fechaCreacion}</td>
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
