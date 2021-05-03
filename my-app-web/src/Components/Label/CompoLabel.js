import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export default class CompoLabel extends Component {
    render() {
        return (
            <div>
                <Form.Label>{this.props.titulo}</Form.Label>
            </div>
        )
    }
}
