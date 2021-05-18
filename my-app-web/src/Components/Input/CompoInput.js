import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
export default class CompoInput extends Component {
    render() {
        return (
            <div>

                <Form.Control type="text" placeholder="Ingresa lo Solicitado">{this.props.onchange}</Form.Control>
                {/* <input className="form-control" type="text">{this.props.onChange}</input> */}
              
            </div>
        )
    }
}
