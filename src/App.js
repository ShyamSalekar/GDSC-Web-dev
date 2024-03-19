// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
    {/* route == /login <Login /> */}
    {/* route == /register <Register /> */}

    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Login />} />
      <Route path = '/register' element = {<Register />} />
    </Routes>
    </BrowserRouter>
      {/* <Login />
      <Register /> */}
    </div>
  );
}

export default App;
