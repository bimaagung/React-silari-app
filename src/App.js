import React, { Component, Fragment } from 'react';
import Main from './main';
import { Header, Footer } from "./layout";


class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <Main/>
        <Footer />
      </Fragment>

    );
  }
}

export default App;
