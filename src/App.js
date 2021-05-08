
import { Switch,Route, BrowserRouter as Router, Link } from 'react-router-dom';
import React from "react";
import calcenergy from './components/calcenergy';
import { Row, Col, Container } from 'react-bootstrap';


import './App.css';
import logo from './assets/logo.png';


const Header = () => {
  return ( <div className = "main-header" >
      <nav className = "header-nav" >
      <Link to = "/" >
      <img className = "logo"
      src = { logo }
      alt = "Greenergy" />
      </Link> 
      <div className = "header-links" >
      <Link className = "subtitle header-text"
      to = "/calcenergy" >
      Calculate Energy </Link> 
      <Link className = "subtitle header-text"
      to = "/energysugg" >
      Energy Suggestions </Link> 
       </div> </nav> </div>
  );
};

const Footer = () => {
  return ( <div className = "main-footer" >
      <nav className = "footer-nav" >
      <a className = "subtitle" href = "/" >Github </a> 
      <a className = "subtitle" href = "/" >About </a> </nav> </div>
  );
};



class App extends React.Component {
  render() {
    return (
      <Router>
      <Header/>
      
      <Link to = "/" >
      <img className = "home-img"
      src = { logo }
      alt = "Greenergy" / >
      </Link> 
      <Container>
        <Row>
          <Col className = "Form">
       
          </Col>
        </Row>
      </Container>
      <Route path ="\calcenergy" component ={calcenergy}></Route>
      <Footer/>
      </Router>
    ) 
  }
}

export default App;
