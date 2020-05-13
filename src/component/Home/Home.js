import React, { Component } from "react";
//import { Button } from 'react-bootstrap';
import { Button } from 'semantic-ui-react'
import history from '../../history';
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div data-test="HomeComponent" className="Home">
        <div className="lander">

          <form data-test="HomeForm">
            <h3 className="homeTitle">Score Board Service</h3>
            <h4 className="homeText" >Please insert new score</h4>
            <br/>
            <Button basic color='green' onClick={() => history.push('/AddScore/Add Score')}>Add Score</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
