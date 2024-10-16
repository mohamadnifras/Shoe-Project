import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationPage from './Project/RegisterAndLogin/RegistrationPage';
import LoginPage from './Project/RegisterAndLogin/LoginPage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<RegistrationPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
