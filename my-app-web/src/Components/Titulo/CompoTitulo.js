import React, { Component } from 'react'

export default class CompoTitulo extends Component {
    render() {
        return (
            <div>
                 <h2 className="m-b-2 card-header ">{this.props.titulo}</h2>
            </div>
        )
    }
}
