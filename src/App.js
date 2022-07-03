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
import Login from'./Login'
import { useStateValue } from './StateProvider';
function App() {

  // const {roomId} = useParams()
  // useEffect(() => {
  //   console.log(roomId)
  // }, [])

  const [roomId, setRoomId] = useState("17MkgQzdjpAW9QFDpEOd")
  const [{user}, dispatch] = useStateValue()

  return (
    //BEM Naming convention
    <div className="app">
      {user ? 
        (<div className="app__body">
          <Router>
            <Sidebar setRoomId = {setRoomId} />
            <Switch>
              <Route path = "/rooms/:roomId" >
                <Chat id = {roomId} />
              </Route>
              <Route path = "/">
              </Route>
            </Switch>
          </Router>
        </div>):(
          <Login/>
        )
      }
    </div>
  );
}

export default App;
