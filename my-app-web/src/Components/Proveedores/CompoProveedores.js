import React, { Component } from 'react';
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import CompoLabel from '../Label/CompoLabel';
import CompoTitulo from '../Titulo/CompoTitulo';
import { Button } from 'react-bootstrap';

export default class CompoProveedores extends Component {
    state = {
        proveedores: [],
        tipoDocumento: [], 
        razonSocial: '',
        tipodocumentoID: '',
        numeroDocumento: '',
        direccion: '',
        telefono: '',
        correoElectronico: '',

    };
    async componentDidMount() {
        this.getProveedor();
        this.listaTipoDocumento();
    }

    //lista de proveedores
    getProveedor =  async () => {
        const res = await axios.get("http://localhost:4000/proveedores");
        this.setState({ proveedores: res.data.datos });
        console.log(res);
      }
      
      //Lista tipo documento
    async listaTipoDocumento() {
        const res = await axios.get("http://localhost:4000/tipoDocumentos");
        this.setState({ tipoDocumento: res.data.datos });
        console.log(res);
    }

    onChangeRazonSocial = (e) => {
        this.setState({
            razonSocial: e.target.value,
        })
        console.log(e.target.value);
      }

      onChangeTipoDocumento = (e) => {
        this.setState({
            tipoDocumentoID: e.target.value,          
        })
        console.log(e.target.value);
      }

      onChangeNumeroDocumento = (e) => {
        this.setState({
            numeroDocumento: e.target.value,
        })
        console.log(e.target.value);
      }

      onChangeDireccion = (e) => {
        this.setState({
            direccion: e.target.value,
        })
        console.log(e.target.value);
      }
      onChangeTelefono = (e) => {
        this.setState({
            telefono: e.target.value,          
        })
        console.log(e.target.value);
      }


      onChangeCorreoElectronico = (e) => {
        this.setState({
            correoElectronico: e.target.value,          
        })
        console.log(e.target.value);
      }

      onSubmit = async e => {
        e.preventDefault();
          await axios.post("http://localhost:4000/proveedores",{
          razonSocial: this.state.razonSocial,
          tipoDocumentoID: this.state.tipoDocumentoID,
          numeroDocumento: this.state.numeroDocumento,
          direccion: this.state.direccion,
          telefono: this.state.telefono,
          correoElectronico: this.state.correoElectronico,
        });     
       this.getProveedor();
    }


    render() {
        return (
            <div className="py-4">
                <Container>
                    <div className="py-1">
                        <div className="card">
                            <CompoTitulo titulo="Registro Proveedores"></CompoTitulo>
                            <Form className="py-5 card-body" onSubmit={this.onSubmit}>
                                <div className="form-group row">
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Razón Social" />
                                        <input  className="form-control" type="text"  value={this.state.razonSocial} onChange={this.onChangeRazonSocial}/>
                                    </Form.Group>
                                       <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Tipo Documento" />
                                        <Form.Control as="select"  onChange={this.onChangeTipoDocumento} custom>
                                            {this.state.tipoDocumento.map((tipodocumento) =>(
                                                <option key={tipodocumento.id} value={tipodocumento.id}>{tipodocumento.nombre}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="N° Documento" />
                                        <input  className="form-control" type="text"  value={this.state.numeroDocumento} onChange={this.onChangeNumeroDocumento}/>
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Dirección" />
                                        <input  className="form-control" type="text"  value={this.state.direccion} onChange={this.onChangeDireccion}/>
                                    </Form.Group>

                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Teléfono" />
                                        <input  className="form-control" type="text"  value={this.state.telefono} onChange={this.onChangeTelefono}/>
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Correo Electrónico" />
                                        <input  className="form-control" type="text"  value={this.state.correoElectronico} onChange={this.onChangeCorreoElectronico}/>
                                    </Form.Group>
                                </div>
                                <Button variant="outline-secondary" type="submit">Guardar</Button>
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
