import React from 'react';
import {Container} from '@material-ui/core';
import Header from './Header/Header';
import Users from "./Users/Users";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header />
        <Users />
      </Container>
    </div>
  );
}

export default App;
