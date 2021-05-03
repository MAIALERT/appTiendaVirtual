import React, { Component } from "react";
import Button from 'react-bootstrap/Button';


export default class CompoButton extends Component {
  render() {
    return (
      <div>
        <Button variant="primary" type="submit">{this.props.titulo}</Button>
      </div>
    );
  }
}
