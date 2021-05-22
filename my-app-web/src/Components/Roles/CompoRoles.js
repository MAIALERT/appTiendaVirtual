import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
//import CompoInput from '../Input/CompoInput';
import CompoLabel from '../Label/CompoLabel';
//import CompoButtonKeep from '../Button/CompoButtonKeep';
import CompoTitulo from '../Titulo/CompoTitulo';
import Button from 'react-bootstrap/Button'
//import ModalEliminar from '../Eliminar/Eliminar'

//import Row from 'react-bootstrap/Row'


export default class Roles extends Component {
  
  state = {
    roles: [],
    nombre: '',
    descripcion: '',
  };

  async componentDidMount(){
    this.getRol();
    console.log(this.state.roles);
  }

 
  onChangeRolNombre = (e) => {
    this.setState({
      nombre: e.target.value,
      //descripcion: e.target.value,
      
    })
  }

  onChangeRolDescripcion = (e) => {
    this.setState({
      //nombre: e.target.value,
      descripcion: e.target.value,
      
    })
  }

  getRol =  async () => {
    const res = await axios.get("http://localhost:4000/roles");
    this.setState({ roles: res.data.datos });
  }
  
  onSubmit = async e => {
      e.preventDefault();
        await axios.post("http://localhost:4000/roles",{
        nombre: this.state.nombre,
        descripcion: this.state.descripcion,
      });
     //console.log(res);
     this.setState({nombre: ''});
     this.setState({descripcion: ''});
     this.getRol();
  }
  
  //PROCESO DE ELIMINACION
  eliminarRol = async (id) =>{
      //console.log(id);
      await axios.delete('http://localhost:4000/roles/' + id)
      this.getRol();
  }


  render() {
   //const hola='hola';
    return (
      <div className="py-4">
        <Container>
        <div className="py-1">
          <div className="card">
             <CompoTitulo titulo="Registro Rol"></CompoTitulo>
            <Form className="py-5 card-body" onSubmit={this.onSubmit}>
                <div className="form-group row">
              <Form.Group  className="col-md-4" controlId="formBasicEmail">
                  <CompoLabel titulo="Nombre"/>
                  {/* <CompoInput/> */}
                  {/* {console.log(this.onChangeRolname)} */}
                 
                  <input  className="form-control" type="text"  value={this.state.nombre} onChange={this.onChangeRolNombre}/>
              </Form.Group>
              <Form.Group className="col-md-4"  controlId="formBasicPassword">
                <CompoLabel titulo="Descripción"/>
                {/* <CompoInput/> */}
                <input  className="form-control" type="text" value={this.state.descripcion} onChange={this.onChangeRolDescripcion}/>
              </Form.Group>
              </div>
              <Button variant="dark" type="submit">Guardar</Button>
               {/* <CompoButtonKeep titulo="Consultar"/> */}
            </Form>
          </div>
        </div>

        {/* Tabla listar roles */}
        <h2 className="py-3">Listado de Roles</h2>
          <Table striped bordered hover className="card-body">
            <thead>
              <tr>
                <th>N°</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {this.state.roles.map((rol) => (
                <tr key={rol.id}>
                  <td>{rol.id}</td>
                  <td>{rol.nombre}</td>
                  <td>{rol.descripcion}</td>
                  <td> <Button variant="danger" type="submit" onClick={() => this.eliminarRol(rol.id)}>Eliminar</Button></td>
                </tr>
              ))}
            </tbody>
           
          </Table>
        </Container>
      </div>
    );
  }
}
