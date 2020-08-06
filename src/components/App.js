import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container} from '@material-ui/core';
import Header from './Header/Header';
import Users from "./pages/Users/Users";
import Albums from "./pages/Albums/Albums";
import Photos from "./pages/Photos/Photos";

function App() {
  return (
    <Router>
      <div className="App">
        <Container maxWidth="lg">
          <Header />
          <Switch>
            <Route path="/user/:user_id/albums/:album_id" component={Photos} />
            <Route path="/user/:user_id/albums" component={Albums} />
            <Route path="/" component={Users} exact />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
