import React, { Component } from 'react';
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import CompoLabel from '../Label/CompoLabel';
import CompoTitulo from '../Titulo/CompoTitulo';
import { Button } from 'react-bootstrap';

export default class CompoUsuarios extends Component {

    state = {
        usuarios: [],
        personas: [],
        roles: [],
        usuario: '',
        contrasena: '',
        rolID: '',
        personaID: '',
    };
    async componentDidMount() {
        this.getUsuario();
        this.listaPersona();
        this.listaRol();
    }

    //listado usuarios
    getUsuario =  async () => {
        const res = await axios.get("http://localhost:4000/usuarios");
        this.setState({ usuarios: res.data.datos });
        console.log(res);
      }
    
    //listado de personas
      async listaPersona() {
        const res = await axios.get("http://localhost:4000/personas");
        this.setState({ personas: res.data.datos });
        console.log(res);
    }

    //listado de roles
      async listaRol() {
        const res = await axios.get("http://localhost:4000/roles");
        this.setState({ roles: res.data.datos });
        console.log(res);
    }

    onChangeUsuario = (e) => {
        this.setState({
            usuario: e.target.value,
          //descripcion: e.target.value,
        })
        console.log(e.target.value);
      }

      onChangeContrasena = (e) => {
        this.setState({
            contrasena: e.target.value,
          //descripcion: e.target.value,
        })
        console.log(e.target.value);
      }

      onChangeRol = (e) => {
        this.setState({
            rolID: e.target.value,
          //descripcion: e.target.value,
        })
        console.log(e.target.value);
      }

      onChangePersona = (e) => {
        this.setState({
            personaID: e.target.value,
          //descripcion: e.target.value,
        })
        console.log(e.target.value);
      }
  
      //funcion agregar
      onSubmit = async e => {
        e.preventDefault();
          await axios.post("http://localhost:4000/usuarios",{
          nombre: this.state.nombre,
          usuario: this.state.usuario,
          contrasena: this.state.contrasena,
          rolID: this.state.rolID,
          personaID: this.state.personaID,
        });
       //console.log(res);
       //this.setState({nombre: ''});
       //this.setState({descripcion: ''});
       this.getUsuario();
    }
      

    render() {
        return (
            <div className="py-4">
                <Container>
                    <div className="py-1">
                        <div className="card">
                            <CompoTitulo titulo="Registro Usuario"></CompoTitulo>
                            <Form className="py-5 card-body" onSubmit={this.onSubmit}>
                                <div className="form-group row">
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Usuario" />
                                        <input  className="form-control" type="text"  value={this.state.usuario} onChange={this.onChangeUsuario}/>
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Contraseña" />
                                        <input  className="form-control" type="text"  value={this.state.contrasena} onChange={this.onChangeContrasena}/>
                                    </Form.Group>
                                   <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Rol" />
                                        <Form.Control as="select"  onChange={this.onChangeRol} custom>
                                            {this.state.roles.map((rol) =>(
                                                <option key={rol.id} value={rol.id}>{rol.nombre}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Persona" />
                                        <Form.Control as="select"   onChange={this.onChangePersona} custom>
                                            {this.state.personas.map((persona) =>(
                                                <option key={persona.id} value={persona.id}>{persona.nombre}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <Button variant="outline-secondary" type="submit">Guardar</Button>
                            </Form>
                        </div>
                    </div>

                    {/* Tabla listar roles */}
                    <h2 className="py-3">Listado de Usuarios</h2>
                    <Table striped bordered hover variant="dark" className="card-body">
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Usuario</th>
                                <th>Rol</th>
                                <th>Persona</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.usuario}</td>
                                    <td>{usuario.rolID}</td>
                                    <td>{usuario.personaID}</td>
                                    <td>{}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

