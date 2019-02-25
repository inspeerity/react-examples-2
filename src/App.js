import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Enquiries from "./controllers/Enquiries/Enquiries";
import Dashboard from "./controllers/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <BrowserRouter>
            <React.Fragment>
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/enquiries" exact component={Enquiries} />
            </React.Fragment>
          </BrowserRouter>
        </React.Fragment>
    );
  }
}

export default App;
