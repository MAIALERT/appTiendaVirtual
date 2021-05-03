import React, { Component } from 'react';
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import CompoInput from '../Input/CompoInput';
import CompoLabel from '../Label/CompoLabel';
import CompoButtonKeep from '../Button/CompoButtonKeep';
import CompoTitulo from '../Titulo/CompoTitulo';

export default class CompoProveedores extends Component {
    state = {
        proveedores: [],
    };
    async componentDidMount() {
        const res = await axios.get("http://localhost:4000/proveedores");
        this.setState({ proveedores: res.data.datos });
        console.log(res);
    }
    render() {
        return (
            <div className="py-4">
                <Container>
                    <div className="py-1">
                        <div className="card">
                            <CompoTitulo titulo="Registro Proveedores"></CompoTitulo>
                            <Form className="py-5 card-body">
                                <div className="form-group row">
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Razón Social" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Tipo Documento" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="N° Documento" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Dirección" />
                                        <CompoInput />
                                    </Form.Group>

                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Teléfono" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Correo Electrónico" />
                                        <CompoInput />
                                    </Form.Group>
                                </div>
                                <CompoButtonKeep titulo="Guardar" />
                            </Form>
                        </div>
                    </div>

                    {/* Tabla listar roles */}
                    <h2 className="py-3">Listado de Proveedores</h2>
                    <Table striped bordered hover variant="dark" className="card-body">
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Razón Social</th>
                                <th>Tipo Documento</th>
                                <th>N° Documento</th>
                                <th>Dirección</th>
                                <th>Telefono</th>
                                <th>Correo Electronico</th>    
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.proveedores.map((proveedor) => (
                                <tr key={proveedor.id}>
                                    <td>{proveedor.id}</td>
                                    <td>{proveedor.razonSocial}</td>
                                    <td>{proveedor.tipodocumentoID}</td>
                                    <td>{proveedor.numeroDocumento}</td>
                                    <td>{proveedor.direccion}</td>
                                    <td>{proveedor.telefono}</td>
                                    <td>{proveedor.correoElectronico}</td>
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
