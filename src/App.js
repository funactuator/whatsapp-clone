// import logo from './logo.svg';
import Chat from './Chat'
import './App.css';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  // const {roomId} = useParams()
  // useEffect(() => {
  //   console.log(roomId)
  // }, [])
  const [forceRender, setForceRender] = useState(false);
  return (
    //BEM Naming convention
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar setForceRender={setForceRender} forceRender={forceRender}/>
          <Switch>
            <Route path = "/rooms/:roomId" render={(props) => (
                <Chat forceRender = {forceRender} />
            )}>
              
            </Route>
            <Route exact path = "/">
              {/* <Sidebar/> */}
              {/* <Chat/> */}
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
