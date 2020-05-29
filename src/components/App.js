import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container} from '@material-ui/core';
import Header from './Header/Header';
import Users from "./Users/Users";
import Albums from "./Albums/Albums";

function App() {
  return (
    <Router>
      <div className="App">
        <Container maxWidth="lg">
          <Header />
          <Switch>
            <Route path="/" component={Users} exact />
            <Route path="/albums/:id" component={Albums} />
            {/*<Route path="/albums/:id/photos" component={Photos} />*/}
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
