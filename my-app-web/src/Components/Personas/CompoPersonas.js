import React, { Component } from 'react';
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import CompoLabel from '../Label/CompoLabel';
import CompoTitulo from '../Titulo/CompoTitulo';
import { Button } from 'react-bootstrap';

export default class CompoPersonas extends Component {

    state = {
        personas: [],
        generos: [],
        tipoDocumento: [],
        nombre: '',
        apellido: '',
        tipoDocumentoID: '',
        numeroDocumento:'',
        fechaNacimiento: '',
        generoID: '',
        correoElectronico: '',
        telefono: '',
        direccion: '',
    };
    async componentDidMount() {
        this.getPersona();
        this.listaGenero();
        this.listaTipoDocumento();
        console.log(this.state.roles);
    }

     //listado personas
     getPersona =  async () => {
        const res = await axios.get("http://localhost:4000/personas");
        this.setState({ personas: res.data.datos });
        console.log(res);
      }
    //Listado Genero
    async listaGenero() {
        const res = await axios.get("http://localhost:4000/generos");
        this.setState({ generos: res.data.datos });
        console.log(res);
    }
     //Lista tipo documento
    async listaTipoDocumento() {
        const res = await axios.get("http://localhost:4000/tipoDocumentos");
        this.setState({ tipoDocumento: res.data.datos });
        console.log(res);
    }
    
    
  onChangeNombre = (e) => {
    this.setState({
      nombre: e.target.value,
      //descripcion: e.target.value,
    })
    console.log(e.target.value);
  }
  onChangeApellido = (e) => {
    this.setState({
        apellido: e.target.value,
      //descripcion: e.target.value,
      
    })
    console.log(e.target.value);
  }
  onChangeTipoDocumento = (e) => {
    this.setState({
        tipoDocumentoID: e.target.value,
      //descripcion: e.target.value,
      
    })
    console.log(e.target.value);
  }
  onChangeNumeroDocumento = (e) => {
    this.setState({
        numeroDocumento: e.target.value,
      //descripcion: e.target.value,
      
    })
    
    console.log(e.target.value);
  }
  onChangeFechaNacimiento = (e) => {
    this.setState({
        fechaNacimiento: e.target.value,
      //descripcion: e.target.value,
      
    })
    console.log(e.target.value);
  }
 
  onChangeGenero = (e) => {
    this.setState({
        generoID: e.target.value,
      //descripcion: e.target.value,
      
    })
    console.log(e.target.value);
  }

  onChangeCorreoElectronico = (e) => {
    this.setState({
        correoElectronico: e.target.value,
      //descripcion: e.target.value,
      
    })
    console.log(e.target.value);
  }
  onChangeTelefono = (e) => {
    this.setState({
        telefono: e.target.value,
      //descripcion: e.target.value,
      
    })
    console.log(e.target.value);
  }
  onChangeDireccion = (e) => {
    this.setState({
        direccion: e.target.value,
      //descripcion: e.target.value,
      
    })
    console.log(e.target.value);
  }
   

    onSubmit = async e => {
        e.preventDefault();
          await axios.post("http://localhost:4000/personas",{
          nombre: this.state.nombre,
          apellido: this.state.apellido,
          tipoDocumentoID: this.state.tipoDocumentoID,
          numeroDocumento: this.state.numeroDocumento,
          fechaNacimiento: this.state.fechaNacimiento,
          generoID: this.state.generoID,
          correoElectronico: this.state.correoElectronico,
          telefono: this.state.telefono, 
          direccion: this.state.direccion,
        });
       //console.log(res);
       //this.setState({nombre: ''});
       //this.setState({descripcion: ''});
       this.getPersona();
    }



    render() {
        return (
            <div className="py-4">
                <Container>
                    <div className="py-1">
                        <div className="card">
                            <CompoTitulo titulo="Registro Persona"></CompoTitulo>
                            <Form className="py-5 card-body" onSubmit={this.onSubmit}>
                                <div className="form-group row">
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Nombre" />
                                        <input  className="form-control" type="text"  value={this.state.nombre} onChange={this.onChangeNombre}/>
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Apellido" />
                                        <input  className="form-control" type="text"  value={this.state.apellido} onChange={this.onChangeApellido}/>
                                    </Form.Group>
                                       <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Tipo Documento" />
                                        <Form.Control as="select"  onChange={this.onChangeTipoDocumento} custom>
                                            {this.state.tipoDocumento.map((tipodocumento) =>(
                                                <option key={tipodocumento.id} value={tipodocumento.id}>{tipodocumento.nombre}</option>
                                            ))}
                                        </Form.Control>
                                    {/* <input  className="form-control" type="text"  value={this.state.tipoDocumentoID} onChange={this.onChangeTipoDocumento}/> */}

                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="N° Documento" />
                                        <input  className="form-control" type="text"  value={this.state.numeroDocumento} onChange={this.onChangeNumeroDocumento}/>
                                    </Form.Group>

                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Genero" />
                                        {/* <input  className="form-control" type="text"  value={this.state.generoID} onChange={this.onChangeGenero}/> */}

                                        <Form.Control as="select"  onChange={this.onChangeGenero} custom>
                                            {this.state.generos.map((genero) =>(
                                                <option key={genero.id} value={genero.id}>{genero.nombre}</option>
                                            ))}
                                        </Form.Control>
                                        
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Fecha Nacimiento" />
                                        <input  className="form-control" type="text"  value={this.state.fechaNacimiento} onChange={this.onChangeFechaNacimiento}/>
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Correo Electronico" />
                                        <input  className="form-control" type="text"  value={this.state.correoElectronico} onChange={this.onChangeCorreoElectronico}/>
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicPassword">
                                        <CompoLabel titulo="Teléfono" />
                                        <input  className="form-control" type="text"  value={this.state.telefono} onChange={this.onChangeTelefono}/>
                                    </Form.Group>
                                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                                        <CompoLabel titulo="Dirección" />
                                        <input  className="form-control" type="text"  value={this.state.direccion} onChange={this.onChangeDireccion}/>
                                    </Form.Group>
                                </div>
                                <Button variant="outline-secondary" type="submit">Guardar</Button>
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

