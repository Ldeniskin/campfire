import React, { Component } from 'react';
import { Jumbotron, Button,Collapse, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/Category.css';
import MainPage from '../components/MainPage';
import MultipleSelect from '../components/MultipleSelect';
import kuz from '../assets/cards/kuz.png';
import geo from '../assets/cards/geo.png';
import typ from '../assets/cards/type.png';
import animals from '../assets/cards/animals.jpg';


class Category extends Component {
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
        <MainPage headtitle={this.props.catname} headbg={this.props.catbg}>
          <Jumbotron>
            <h1 className="display-3">
               Эта страница
            </h1>
            <p className="lead">Поможет найти Ваш отдых</p>
            <hr className="my-2" />
            <p>Воспользуйтесь формой поиска</p>
            <Button color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Искать</Button>
          </Jumbotron>
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
        <Button>Найти</Button>
      </Form>
            </Jumbotron>
          </Collapse>
          <Jumbotron className="catcards">
        <Card >
           <div className="card-img-top"><img top="top" width="100%" src={geo} alt="Card image cap"/></div>
          <CardBody>
            <div className="cardcaption">
            <CardTitle>География</CardTitle>
            <CardText>Места где можно охотиться</CardText>
            </div>
            <Button color="danger">Посмотреть</Button>
          </CardBody>
          </Card>
          <Card>
          <div className="card-img-top"><img top="top" width="100%" src={animals} alt="Card image cap"/></div>
          <CardBody>
            <div className="cardcaption">
            <CardTitle>На кого</CardTitle>
            <CardText>Виды зверей и птиц на кого предоставляется охота</CardText>
            </div>
            <Button color="danger">Посмотреть</Button>
          </CardBody>
          </Card>
          <Card>
          <div className="card-img-top"><img top="top" width="100%" src={typ} alt="Card image cap"/></div>
          <CardBody>
            <div className="cardcaption">
            <CardTitle>Виды охоты</CardTitle>
            <CardText>Виды охоты - как можно охотиться</CardText>
            </div>
            <Button color="danger">Посмотреть</Button>
          </CardBody>
          </Card>
          <Card>
          <div className="card-img-top"><img top="top" width="100%" src={kuz} alt="Card image cap"/></div>
          <CardBody>
            <div className="cardcaption">
            <CardTitle>Кузьмичи</CardTitle>
            <CardText>Люди, которые предоставляют данные услуги</CardText>
            </div>
            <Button color="danger">Посмотреть</Button>
          </CardBody>
          </Card>
          </Jumbotron>
        </MainPage>
    );
  }
}

export default Category;
