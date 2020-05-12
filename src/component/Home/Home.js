import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from '../../history';
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div data-test="HomeComponent" className="Home">
        <div className="lander">

          <form data-test="HomeForm">
            <h3 className="homeTitle">Score Board Service</h3>
            <h6 className="homeText" >Please insert new score.</h6>
            <br/>
            <Button variant="btn btn-success" onClick={() => history.push('/AddScore/Add Score')}>Add Score</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
