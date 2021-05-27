import React, { Component } from 'react';
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import CompoInput from '../Input/CompoInput';
import CompoLabel from '../Label/CompoLabel';
import CompoButtonKeep from '../Button/CompoButtonKeep';
import CompoTitulo from '../Titulo/CompoTitulo';

export default class CompoProductos extends Component {
    state = {
        productos: [],
        categorias: [],
    };
    async componentDidMount() {
        const res = await axios.get("http://localhost:4000/productos");
        this.setState({ productos: res.data.datos });
        console.log(res);
        this.listaCategoria();
    }

    //lista categoria
    async listaCategoria() {
        const res = await axios.get("http://localhost:4000/categorias");
        this.setState({ categorias: res.data.datos });
        console.log(res);
    }
    
    render() {
        return (
            <div className="py-4">
                <Container>
                    <div className="py-1">
                        <div className="card">
                            <CompoTitulo titulo="Registro Productos"></CompoTitulo>
                            <Form className="py-5 card-body">
                                <div className="form-group row">
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Nombre" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Descripción" />
                                        <CompoInput />
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Categoria" />
                                        <Form.Control as="select" custom>
                                            {this.state.categorias.map((categoria) => (
                                                <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Valor Unidad Cliente" />
                                        <CompoInput />
                                    </Form.Group>
                                </div>
                                <CompoButtonKeep titulo="Guardar" />
                            </Form>
                        </div>
                    </div>

                    {/* Tabla listar roles */}
                    <h2 className="py-3">Listado de Productos</h2>
                    <Table striped bordered hover variant="dark" className="card-body">
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                                <th>Valor Unidad Cliente</th>
                                <th>Cantidad</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.productos.map((producto) => (
                                <tr key={producto.id}>
                                    <td>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>{producto.categoriaID}</td>
                                    <td>{producto.valorUnidadCliente}</td>
                                    <td>{producto.cantidad}</td>
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
