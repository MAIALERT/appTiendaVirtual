import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import CompoInput from '../Input/CompoInput';
import CompoLabel from '../Label/CompoLabel';
import CompoButtonKeep from '../Button/CompoButtonKeep';
import CompoTitulo from '../Titulo/CompoTitulo';

//import Row from 'react-bootstrap/Row'

export default class Roles extends Component {
  state = {
    roles: [],
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/roles");
    this.setState({ roles: res.data.datos });
    console.log(res);
  }

  render() {
    return (
      <div className="py-4">
        <Container>
        <div className="py-1">
          <div className="card">
             <CompoTitulo titulo="Registro Rol"></CompoTitulo>
            <Form className="py-5 card-body">
                <div className="form-group row">
              <Form.Group  className="col-md-4" controlId="formBasicEmail">
                  <CompoLabel titulo="Nombre"/>
                  <CompoInput/>
              </Form.Group>
              <Form.Group className="col-md-4"  controlId="formBasicPassword">
                <CompoLabel titulo="Descripción"/>
                <CompoInput/>
              </Form.Group>
              </div>
               <CompoButtonKeep titulo="Guardar"/>
            </Form>
          </div>
        </div>

        {/* Tabla listar roles */}
        <h2 className="py-3">Listado de Roles</h2>
          <Table striped bordered hover variant="dark" className="card-body">
            <thead>
              <tr>
                <th>N°</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {this.state.roles.map((rol) => (
                <tr key={rol.id}>
                  <td>{rol.id}</td>
                  <td>{rol.nombre}</td>
                  <td>{rol.descripcion}</td>
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
