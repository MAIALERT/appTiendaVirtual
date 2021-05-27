import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import CompoLabel from '../Label/CompoLabel';
import CompoTitulo from '../Titulo/CompoTitulo';
import Button from 'react-bootstrap/Button';


export default class CompoCategorias extends Component {

  state = {
    categorias: [],
    nombre: '',
    descripcion: '',
  };
  async componentDidMount() {
   this.getCategoria();
  }

  getCategoria =  async () => {
    const res = await axios.get("http://localhost:4000/categorias");
    this.setState({ categorias: res.data.datos });
    console.log(res);
  }
  onChangeRolNombre = (e) => {
    this.setState({
      nombre: e.target.value,      
    })
  }

  onChangeRolDescripcion = (e) => {
    this.setState({
      descripcion: e.target.value,
      
    })
  }

  onSubmit = async e => {
    e.preventDefault();
      await axios.post("http://localhost:4000/categorias",{
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
    });
   this.setState({nombre: ''});
   this.setState({descripcion: ''});
   this.getCategoria();
}

  render() {
    return (
      <div className="py-4">
        <Container>
          <div className="py-1">
            <div className="card">
              <CompoTitulo titulo="Registro Categoría"></CompoTitulo>
              <Form className="py-5 card-body" onSubmit={this.onSubmit}>
                <div className="form-group row">
                  <Form.Group className="col-md-4" controlId="formBasicEmail">
                    <CompoLabel titulo="Nombre" />
                    <input  className="form-control" type="text"  value={this.state.nombre} onChange={this.onChangeRolNombre}/>
                  </Form.Group>
                  <Form.Group className="col-md-4" controlId="formBasicPassword">
                    <CompoLabel titulo="Descripción" />
                    <input  className="form-control" type="text" value={this.state.descripcion} onChange={this.onChangeRolDescripcion}/>
                  </Form.Group>
                </div>
                <Button  variant="outline-secondary" type="submit">Guardar</Button>
              </Form>
            </div>
          </div>

          {/* Tabla listar roles */}
          <h2 className="py-3">Listado de Categorías</h2>
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
              {this.state.categorias.map((categoria) => (
                <tr key={categoria.id}>
                  <td>{categoria.id}</td>
                  <td>{categoria.nombre}</td>
                  <td>{categoria.descripcion}</td>
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
