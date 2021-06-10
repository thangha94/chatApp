import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import About from './functions/About/About';
import Chat from './functions/Chat/Chat';
import Home from './functions/Home/Home';
import Login from './functions/Login/Login';
import Room from './functions/Room/Room';
import './styles/main.scss';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

export default App;
