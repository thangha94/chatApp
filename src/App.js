import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './functions/Home/Home';
import Login from './functions/Login/Login';
import './styles/main.scss';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home/type/:type/t/:id">
          <Home />
        </Route>
        <Redirect to="/home/type/direct/t/main" />
      </Switch>
    </Router>
  );
};

export default App;
