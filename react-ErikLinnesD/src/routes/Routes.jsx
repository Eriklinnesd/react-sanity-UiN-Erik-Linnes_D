/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Home from '../pages/Home';
import Filmer from '../pages/Filmer';
import About from '../pages/About';
import NoMatch from '../pages/NoMatch';
import Navigation from '../components/Navigation';

const Routes = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/filmer">
        <Filmer />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>
      <Redirect exact from="/home" to="/" />

      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
