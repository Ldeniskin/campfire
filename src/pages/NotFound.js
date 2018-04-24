import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import MainPage from '../components/MainPage';
import '../css/NotFound.css';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MainPage headtitle="404" headsub="Не найдено">
        <Jumbotron>
          <h1 className="display-3">Странно...</h1>
          <p className="lead">Эта страница никогда не существовала или мистическим образом исчезла.</p>
          <hr className="my-2" />
          <p>Но не стоит грустить.</p>
          <a href="/" className="lead">
            <Button color="info" >Назад</Button>
          </a>
          <a href="/" className="lead">
            <Button color="danger" >Вернуться на главную</Button>
          </a>
        </Jumbotron>
      </MainPage>
    );
  }
}

export default NotFound;
