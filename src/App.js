import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import Protect from './components/Protect';
import Addtask from './components/Addtask';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/home' element={<Protect Child={Home}/>}/>
        <Route path='/userprofile' element={<Protect Child={Profile}/>}/>
        <Route path='/addtask' element={<Protect Child={Addtask}/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        

      </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;