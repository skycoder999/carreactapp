import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Styled from './styled';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Models from './components/Models';
import ModelDetailsComponent from './components/Models/components/ModelDisplay/modeldetailscomponent';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Styled.MainContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/models" component={Models} />
            <Route exact path="/models/:manufacturer" component={Models} />
            <Route exact path="/modeldetail" component={ModelDetailsComponent} />
            {/*  <Route exact path="/accesories" component={Accesories} /> */}
          </Switch>
        </Styled.MainContainer>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
