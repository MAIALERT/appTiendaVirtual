import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Ejemplo de importar componentes

import CompoNavigation from './Components/Navigation/CompoNavigation';
import Roles from './Components/Roles/CompoRoles';
import Personas from './Components/Personas/CompoPersonas';
import Usuarios from './Components/Usuarios/CompoUsuarios';
import Proveedores from './Components/Proveedores/CompoProveedores';
import Categorias from './Components/Categorias/CompoCategorias';
import Pedidos from './Components/Pedidos/PedidoProveedores';
import Productos from './Components/Productos/CompoProductos';
import Compras from './Components/Compras/pedidoCompras';


function App() {
  return (
    <Router>
    {/* </Router><Compoheader/> */}
    <Route path="/" component={CompoNavigation}/>
    <Route path="/roles" component={Roles}/>
    <Route path="/personas" component={Personas}/>
    <Route path="/Usuarios" component={Usuarios}/>
    <Route path="/Proveedores" component={Proveedores}/>
    <Route path="/Categorias" component={Categorias}/>
    <Route path="/PedidoProveedores" component={Pedidos}/>
    <Route path="/Productos" component={Productos}/>
    <Route path="/Compras" component={Compras}/>
    </Router>
  );
}

export default App;
