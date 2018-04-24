import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  Button, } from 'reactstrap';
import '../css/ContactForm.css';
class ContactForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Jumbotron className="contactus">
        <div className="container">
        <h1>Свяжитесь с нами</h1>
        <Form>
                <FormGroup>
                    <Label for="exampleName">Ваше имя</Label>
                      <Input type="name" name="name" id="exampleName" placeholder="Иван" />
                  </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="example@mail.com" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePhone">Телефон</Label>
                <Input type="phone" name="phone" id="examplePhone" placeholder="+7 (9--) --- -- --" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Сообщениe</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>


              <Button color="danger">Отправить</Button>
            </Form>
          </div>
      </Jumbotron>
    );
  }
}

export default ContactForm;
