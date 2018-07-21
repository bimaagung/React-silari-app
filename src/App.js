import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router';

import {MainRoot} from './component/mainRoot';
import {DetailPage, ProfilPage} from './main';
import {MainPage} from './main/mainPage';


class App extends Component {

  render() {
    return (
      <Router>
        <MainRoot>
           <Switch>
              <Route exact path={"/"} component={MainPage}/>
              <Route path={"/user"} component={ProfilPage}/>
              <Route path={"/detail-profil"} component={DetailPage}/>
            </Switch>      
        </MainRoot>
      </Router>
    );
  }
}

export default App;
{/* <Fragment>
        <Header />
        <Main/>
        <Footer />
      </Fragment> */}