import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container} from '@material-ui/core';
import Header from './Header/Header';
import UsersPage from "./pages/UsersPage/UsersPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Container maxWidth="lg">
          <Header />
          <Switch>
            <Route path="/user/:user_id/albums/:album_id" component={PhotosPage} />
            <Route path="/user/:user_id/albums" component={AlbumsPage} />
            <Route path="/" component={UsersPage} exact />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
