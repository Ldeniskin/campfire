import React, { Component } from 'react';
import './css/App.css';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Auth from './pages/Auth';
import db from './json/db.json';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let CategoryRoutes = db.categ.map((cat) =>
      <Route path={`/category/${cat.name}`} render={(props) => <Category catname={cat.title}/>}/>
    );
    return (
      <Router>
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/search" component={Search}/>
         {CategoryRoutes}
         <Route path="/register" render={(props) => <Auth reg={true}/>}/>
         <Route path="/auth" render={(props) => <Auth reg={false}/>}/>
         <Route component={NotFound}/>
       </Switch>
      </Router>
    )
  }
}

export default App;
