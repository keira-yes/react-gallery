import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container} from '@material-ui/core';
import Header from './Header/Header';
import Users from "./Users/Users";
import Albums from "./Albums/Albums";
import Photos from "./Photos/Photos";

function App() {
  return (
    <Router>
      <div className="App">
        <Container maxWidth="lg">
          <Header />
          <Switch>
            <Route path="/" component={Users} exact />
            <Route path="/:user/albums" component={Albums} />
            <Route path="/:user/album_:album" component={Photos} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
