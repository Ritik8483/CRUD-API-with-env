import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import AddUser from './pages/AddUser';
import EditAddUser from './pages/EditAddUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/adduser' element={<AddUser/>} />
          <Route path='/edituser/:id' element={<EditAddUser/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
