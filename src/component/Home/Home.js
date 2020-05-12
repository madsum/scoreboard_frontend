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
            <h2 className="h2">Score Board Service</h2>
            <p className="p" >Please insert new score.</p>
            <Button variant="btn btn-success" onClick={() => history.push('/AddScore/Add Score')}>Add Score</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
