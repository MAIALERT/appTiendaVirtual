import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'



export default class CompoNavigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Cristal Makeup Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <NavDropdown title="Usuario" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/roles">Rol</NavDropdown.Item> 
                  <NavDropdown.Item href="/Eliminar">Eliminar</NavDropdown.Item> 
                  {/* <Link className= "nav-link "to= "/roles">Rol</Link>  */}
                  <NavDropdown.Item href="/personas">Persona</NavDropdown.Item> 
                  <NavDropdown.Item href="/Usuarios">Usuario</NavDropdown.Item>
                  <NavDropdown.Item href="/Proveedores">Proveedor</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Producto" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Categorias">Categoria</NavDropdown.Item>
                  <NavDropdown.Item href="/Productos">Producto</NavDropdown.Item>
                  <NavDropdown.Item href="/Compras">Listado de Pedidos(Compras)</NavDropdown.Item>
                  <NavDropdown.Item href="/PedidoProveedores">Pedido Proveedor</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Maquillaje" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Labios</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Ojos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Rostro</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
