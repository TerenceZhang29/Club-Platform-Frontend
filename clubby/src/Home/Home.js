import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "../css/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>A simple app showing react button click navigation</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/Events')}>Click button to view events</Button>
          </form>
          <h2>Embedded Facebook Page</h2>
          <p>An embedded page from facebook with timeline and events</p>
          <iframe id="iframe1" name="iframe1" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2Fstaplescenter%2Fevents%2F%3Fref%3Dpage_internal&tabs=timeline%2Cevents&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" height="500px" width="400px">
          </iframe>
        </div>
      </div>
    );
  }
}
