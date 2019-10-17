import React from "react";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class Contact extends React.Component {
  render() {
    return (
      <Container className="Contactos">
        <h1>Contact</h1>
        <form className="form">
           <Col>
            <FormGroup>
              <Label>Nombre</Label>
              <Input
                type="text"
                name="name"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Comentario</Label>
              <Input
                type="textarea"
                name="comentario"
              />
            </FormGroup>
          </Col>
          <Button type="submit">Enviar</Button>
        </form>
      </Container>
    );
  }
}

export default Contact;
