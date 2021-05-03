import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
export default class CompoInput extends Component {
    render() {
        return (
            <div>
                <Form.Control type="text" placeholder="Ingrese lo Solicitado"/>
                {/* <Form.Control type="text">{this.props.titulo}</Form.Control> */}
              
            </div>
        )
    }
}
