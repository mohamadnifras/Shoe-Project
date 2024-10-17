import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationPage from './Project/RegisterAndLogin/RegistrationPage';
import LoginPage from './Project/RegisterAndLogin/LoginPage';
import Context from './Project/RegisterAndLogin/Context';
import HomePage from './Project/HomePage';

function App() {
  return (
    <div className="App">
      <Context>
      <Routes>
      <Route path='/' element={<RegistrationPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
     </Routes>
      </Context>
     
    </div>
  );
}

export default App;
