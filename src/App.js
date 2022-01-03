import '../src/comp/Header'
import Header from '../src/comp/Header';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom'
import Women from './pages/Women'
import Men from './pages/Men'
import Children from './pages/Children'
import Kids from './pages/Kids'
import ScrollButton from './comp/ScrollButton';
import Footer from './comp/Footer';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Basket from './pages/Basket';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/">
              <Home />
          </Route>
          <Route path="/women">
              <Women />
          </Route>
          <Route path="/men">
              <Men />
          </Route>
          <Route path="/children">
              <Children />
          </Route>
          <Route path="/baby">
              <Kids />
          </Route>
          <Route path="/favorite">
              <Favorite />
          </Route>
          <Route path="/basket">
              <Basket />
          </Route>
        </Switch>
        <ScrollButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
