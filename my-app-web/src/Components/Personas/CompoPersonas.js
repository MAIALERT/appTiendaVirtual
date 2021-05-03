import React, { Component } from 'react';
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import CompoInput from '../Input/CompoInput';
import CompoLabel from '../Label/CompoLabel';
import CompoButtonKeep from '../Button/CompoButtonKeep';
import CompoTitulo from '../Titulo/CompoTitulo';

export default class CompoPersonas extends Component {

    state = {
        personas: [],
    };
    async componentDidMount() {
        const res = await axios.get("http://localhost:4000/personas");
        this.setState({ personas: res.data.datos });
        console.log(res);
    }
    render() {
        return (
            <div className="py-4">
                <Container>
                    <div className="py-1">
                        <div className="card">
                            <CompoTitulo titulo="Registro Persona"></CompoTitulo>
                            <Form className="py-5 card-body">
                                <div className="form-group row">
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Nombre" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Apellido" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Tipo Documento" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="N° Documento" />
                                        <CompoInput />
                                    </Form.Group>

                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Genero" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Fecha Nacimiento" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Correo Electronico" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Teléfono" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Dirección" />
                                        <CompoInput />
                                    </Form.Group>
                                </div>
                                <CompoButtonKeep titulo="Guardar" />
                            </Form>
                        </div>
                    </div>

                    {/* Tabla listar roles */}
                    <h2 className="py-3">Listado de Personas</h2>
                    <Table striped bordered hover variant="dark" className="card-body">
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Nombre</th>
                                <th>Tipo Documento</th>
                                <th>N° Documento</th>
                                <th>Genero</th>
                                <th>Correo Electronico</th>
                                <th>Telefono</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Dirección</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.personas.map((persona) => (
                                <tr key={persona.id}>
                                    <td>{persona.id}</td>
                                    <td>{persona.nombre}</td>
                                    <td>{persona.tipoDocumentoID}</td>
                                    <td>{persona.numeroDocumento}</td>
                                    <td>{persona.generoID}</td>
                                    <td>{persona.correoElectronico}</td>
                                    <td>{persona.telefono}</td>
                                    <td>{persona.fechaNacimiento}</td>
                                    <td>{persona.direccion}</td>
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

