import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import MainPage from '../components/MainPage';
import searchbg from '../assets/searchbg.jpg';
import '../css/Search.css';
class Nothing extends Component{
  render() {
    return (
      <Jumbotron>
        <h1 className="display-3">
          К сожалению
        </h1>
        <p className="lead">Ваш запрос не дал результатов</p>
        <hr className="my-2" />
        <p>Попробуйте еще раз</p>
        <a href="/" className="lead">
          <Button color="info" >Назад</Button>
        </a>
        <a href="/" className="lead">
          <Button color="danger" >Вернуться на главную</Button>
        </a>
      </Jumbotron>
    );
  }
}
class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MainPage headbg={searchbg} headtitle="Результаты поиска">
        <Nothing/>
      </MainPage>
    );
  }
}

export default Search;
