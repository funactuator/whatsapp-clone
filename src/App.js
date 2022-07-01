// import logo from './logo.svg';
import Chat from './Chat'
import './App.css';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    //BEM Naming convention
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path = "/rooms/:roomId">
              <>
              <Sidebar/>
              <Chat/>
              </>
              
            </Route>
            <Route path = "/">
              <Sidebar/>
              {/* <Chat/> */}
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
