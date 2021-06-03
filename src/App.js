import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './functions/About/About';
import Chat from './functions/Chat/Chat';
import Home from './functions/Home/Home';
import Login from './functions/Login/Login';
import Room from './functions/Room/Room';
const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/about"><About /></Route>
                <Route path="/chat"><Chat /></Route>
                <Route path="/room"><Room /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </Router>
    );
};

export default App;