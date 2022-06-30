// import logo from './logo.svg';
import Chat from './Chat'
import './App.css';
import Sidebar from './Sidebar';


function App() {
  return (
    //BEM Naming convention
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
