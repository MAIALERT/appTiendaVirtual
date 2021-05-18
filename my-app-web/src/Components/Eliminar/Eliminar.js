import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button'


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

  getRol =  async () => {
    const res = await axios.get("http://localhost:4000/roles");
    this.setState({ roles: res.data.datos });
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

