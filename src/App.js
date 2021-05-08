
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
      
      
      <Container>
        <Row style={{ marginTop: 0, marginBottom: 50 }}>
        <Col lg={2} md={4} xs={6}>
          <div className="heading">
          <h1>
            Inspiration
          </h1>
          </div>
          </Col>

          <Col lg={8} md={4} xs={6}>
          <div className="home-img">
          <Link to = "/" >
      <img className="home-img"
      src = { logo }
      alt = "Greenergy"/>
      </Link> 
      </div>
          </Col>
          <Col lg={1} md={2} xs={6}>
            <p className="content">
            Global Warming, carbon emissions are current buzzwords. Computer science is changing the way we look at climate change and perhaps even plays a role in slowing that phenomenon.  
But there is a downside to the excessive use of technology as well. Computer doesn't necessarily run on carbon fuels however the electricity it uses to run daily does and the amount used has been piling up over the past few decades now as more people buy home PC units to enjoy the world of computing

            </p>
       
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
