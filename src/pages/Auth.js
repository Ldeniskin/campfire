import React, { Component } from 'react';
import MainPage from '../components/MainPage';
import '../css/Auth.css';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  Button, } from 'reactstrap';
class Register extends Component{
    render() {
      return (
        <div className="container">
        <h1>Регистрация</h1>
        <Form>
              <FormGroup>
                <Label for="examplePhone">Телефон</Label>
                <Input type="phone" name="phone" id="examplePhone" placeholder="+7 (9--) --- -- --" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Пароль</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="●●●●●●●●" />
              </FormGroup>
              <Button color="danger">Зарегестрироваться</Button>
          </Form>
        </div>
      );
    }
  }
class Authenticate extends Component{
    render() {
      return (
        <div className="container">
        <h1>Авторизация</h1>
        <Form>
              <FormGroup>
                <Label for="examplePhone">Телефон</Label>
                <Input type="phone" name="phone" id="examplePhone" placeholder="+7 (9--) --- -- --" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Пароль</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="●●●●●●●●" />
              </FormGroup>
              <Button color="danger">Войти</Button>
        </Form>
        </div>
      );
    }
  }
class Auth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isReg = this.props.reg;
    return (
        <MainPage headtitle="Костерок" headsub="Мы делаем то во что верим!">
          <Jumbotron className="contactus">
            {isReg ? (
              <Register/>
            ) : (
              <Authenticate/>
            )}
          </Jumbotron>
        </MainPage>
    );
  }
}

export default Auth;
