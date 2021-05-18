import React, { useState } from "react";
//import axios from "axios";
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';
// import { ButtonGroup } from 'react-bulma-components';
// import { ModalCard } from 'react-bulma-components';
// import { ModalCardHead } from 'react-bulma-components';
// import { ModalCardTitle } from 'react-bulma-components';
// import { ModalCardBody } from 'react-bulma-components';
import { Modal } from 'react-bulma-components';
import { Media } from 'react-bulma-components';
// import { MediaItem } from 'react-bulma-components';
//import { Image } from 'react-bulma-components';
import { Content } from 'react-bulma-components';
import ProEliminar from './Eliminar';
// import { ModalCardFoot } from 'react-bulma-components';

const Eliminar = (args) => {  
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
        {...args}
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
                  <p>
                    <br />
                    <ProEliminar/>
                  </p>
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
