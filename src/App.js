import React, { Component } from "react";

// import axios from 'axios';

import {PerilList} from './components/perils-list/perils-list.component.jsx';
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      perils: []
    }
  }
  
  componentDidMount(){
    fetch(`https://hedvig-staging-rest-api.vercel.app/api/perils?contractType=SE_APARTMENT_RENT&locale=en_SE`)
    .then(response => response.json())
    .then(perils => this.setState({ perils: perils}))
  }


  render() {
    return (
      <div class="title">
        <h2> We have you coverd </h2>
        <h3>Extensive coverage for you and your family, your house and your belongings. 
          All risk is always included. Click the icons for more info. </h3>
      <div className="App">
        <PerilList perils={this.state.perils} />
      </div>
      </div>
    );
  }
}

export default App;
