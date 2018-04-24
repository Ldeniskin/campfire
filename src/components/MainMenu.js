import React, { Component } from 'react';
import i1 from '../assets/icons/1.svg';
import i2 from '../assets/icons/2.svg';
import i3 from '../assets/icons/3.svg';
import i4 from '../assets/icons/4.svg';
import i5 from '../assets/icons/5.svg';
import i6 from '../assets/icons/6.svg';
import i7 from '../assets/icons/7.svg';
import i8 from '../assets/icons/8.svg';
import i9 from '../assets/icons/9.svg';
import i10 from '../assets/icons/10.svg';
import i11 from '../assets/icons/11.svg';
import i12 from '../assets/icons/12.svg';
import i13 from '../assets/icons/13.svg';
import db from '../json/db.json';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Tooltip,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import '../css/MainMenu.css';
class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.clearTooltip = this.clearTooltip.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      isOpen: false,
      tooltipOpen: "none"
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  clearTooltip(){
    this.setState({tooltipOpen: "none"});
    console.log("left");
  }
 toggleTooltip(catname){
   this.setState({tooltipOpen: catname});
 }
  componentDidMount(){
    console.log(db.categ[0]);
  }
  render() {
    const MainMenuItem = db.categ.map((cat) =>
    <div onMouseLeave={this.clearTooltip}>
      <NavItem id={cat.name}>
        <NavLink href={`/category/${cat.name}`}>
          <img src={require('../assets/icons/'+cat.img)} width={64} height={64} className="App-menu-icons" alt={cat.title} />
          <h1>{cat.title}</h1>
        </NavLink>
      </NavItem>
      <Tooltip placement="top"  isOpen={(cat.name===this.state.tooltipOpen)} target={cat.name} toggle={() => this.toggleTooltip(cat.name)}>
          {cat.title}
      </Tooltip>
    </div>
    );
    return (
      <div className="category-nav">
        <Navbar className="navbar-dark" light expand="md">
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <div onMouseLeave={this.clearTooltip}>
              <NavItem id="main">
                <NavLink href="/">
                  <img src={require('../assets/icons/14.svg')} width={64} height={64} className="App-menu-icons" alt="Главная" />
                  <h1>Главная</h1>
                </NavLink>
              </NavItem>
              <Tooltip placement="top"  isOpen={("main"===this.state.tooltipOpen)} target="main" toggle={() => this.toggleTooltip("main")}>
                  Главная
              </Tooltip>
            </div>
            {MainMenuItem}
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  }
}

export default MainMenu;
