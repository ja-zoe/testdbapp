import './App.module.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/sign-up' exact element={<SignUp/>} />
        <Route path='/login' exact element={<LogIn/>} />
      </Routes>
    </div>
  );
}

export default App;
