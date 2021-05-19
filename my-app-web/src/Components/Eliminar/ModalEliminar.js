import React, {useState} from "react";
import 'bulma/css/bulma.min.css';
import {Button} from 'react-bulma-components';
import {Modal} from 'react-bulma-components';
import {Media} from 'react-bulma-components';
import {Content} from 'react-bulma-components';
import ProEliminar from './Eliminar';




const Eliminar = () => {  
  const [openModal, setOpenModal] = useState();
  return (
    <>
      <Button.Group>
        <Button
          color="info"
          onClick={() => {
            return setOpenModal('card');
          }}
        >
          Vamos a Eliminar Roles
        </Button>
      </Button.Group>
      <Modal  
        show={openModal === 'card'}
        onClose={() => {
          return setOpenModal();
        }}
      >
        <Modal.Card>
          <Modal.Card.Header showClose>
            <Modal.Card.Title>Proceso de Eliminación</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <Media>
              <Media.Item>
                <Content>
                 <ProEliminar/>
                </Content>
              </Media.Item>
            </Media>
          </Modal.Card.Body>
          <Modal.Card.Footer renderAs={Button.Group} align="right" hasAddons>
          </Modal.Card.Footer>
        </Modal.Card>
      </Modal>
    </>);
 
  }

  export default Eliminar;

