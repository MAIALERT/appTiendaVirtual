import React, { Component } from 'react';
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import CompoInput from '../Input/CompoInput';
import CompoLabel from '../Label/CompoLabel';
import CompoButtonKeep from '../Button/CompoButtonKeep';
import CompoTitulo from '../Titulo/CompoTitulo';

export default class CompoUsuarios extends Component {

    state = {
        usuarios: [],
    };
    async componentDidMount() {
        const res = await axios.get("http://localhost:4000/usuarios");
        this.setState({ usuarios: res.data.datos });
        console.log(res);
    }
    render() {
        return (
            <div className="py-4">
                <Container>
                    <div className="py-1">
                        <div className="card">
                            <CompoTitulo titulo="Registro Usuario"></CompoTitulo>
                            <Form className="py-5 card-body">
                                <div className="form-group row">
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Usuario" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Contraseña" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Rol" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Persona" />
                                        <CompoInput />
                                    </Form.Group>
                                </div>
                                <CompoButtonKeep titulo="Guardar" />
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

