import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


const App = () => {
  return (
    <Fragment>
    <Header/>
    <main className='py-3'>  
      <Container>
        <Switch>

          <Route path="/" component={HomeScreen} exact/>
          <Route path="/product/:id" component={ProductScreen}/>
        {/* <HomeScreen/> */}
        </Switch>
      </Container>
    </main>
    <Footer/> 
    </Fragment>
  );
}

export default App;
