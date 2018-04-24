import React, { Component } from 'react';
import '../css/FrontPageContent.css';
import MultipleSelect from '../components/MultipleSelect';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  Button,
Collapse } from 'reactstrap';
import ContactForm from './ContactForm';
import MainMenu from './MainMenu';
import cabin from '../assets/cabin.png';
import andr from '../assets/andr.png';
import FontAwesome from 'react-fontawesome';
class FrontPageContent extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
    <div>
      <div className="section-first">
      <Jumbotron className="search">
      <div className="before"></div>
      <Form action="/search" >
              <FormGroup>
                  <Label for="exampleSearch">Поиск</Label>
                  <Input type="search" name="search" id="exampleSearch" placeholder="Кабан" />
              </FormGroup>
              <div className="searchControlButton">
              <Button color="danger">Искать</Button>
              <Button color="dark" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                {this.state.collapse ? (
                  <FontAwesome name='chevron-up' />
                ) : (
                  <FontAwesome name='chevron-down' />
                )}
              </Button>
              </div>
              <Collapse isOpen={this.state.collapse}>
                <Jumbotron className="catsearch">
                  <Form>
                    <FormGroup>
                    <MultipleSelect/>
                    </FormGroup>
            <FormGroup>
            <MultipleSelect/>
            </FormGroup>
            <FormGroup>
            <MultipleSelect/>
            </FormGroup>
            <FormGroup>
            <MultipleSelect/>
            </FormGroup>
            <FormGroup>
            <MultipleSelect/>
            </FormGroup>
            <Button color="danger">Найти</Button>
          </Form>
                </Jumbotron>
              </Collapse>
      </Form>
      </Jumbotron>
      </div>
      <h1 className="secion-label">Наша команда</h1>
      <div className="comand">
          <Jumbotron>
            <img src={andr} width={256} height={256} className="App-andr" alt="andr" />
            <div className="person container">
              <h2>Андрей Тютюнник</h2>
              <p className="lead">Создатель и директор</p>
              <hr className="my-2" />
              <p>Глава сайта и всея Руси!</p>
              <p className="lead">
                <Button color="danger">Подробнее</Button>
              </p>
            </div>
          </Jumbotron>
          <Jumbotron>
            <img src={cabin} width={256} height={256} className="App-cabin" alt="cabin" />
            <div className="person container">
              <h2>Савин Александр</h2>
              <p className="lead">Разработчик и Администратор</p>
              <hr className="my-2" />
              <p>Крыша сайта и основа</p>
              <p className="lead">
                <Button color="danger">Подробнее</Button>
              </p>
            </div>
          </Jumbotron>
      </div>
      <ContactForm/>
    </div>
    );
  }
}

export default FrontPageContent;
