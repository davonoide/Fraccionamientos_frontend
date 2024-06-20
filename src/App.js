
// import './App.css';
import Appbar from './components/AppBar';
import Sidebar from './components/SideBar';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AppBar } from '@mui/material';
import HomePage from './pages/HomePage';
import FraccPage from './pages/FraccPage';


// function App() {
//   return (
//     <div className="App">

//       <Appbar></Appbar>
//       <Sidebar></Sidebar>
//     </div>
//   );
// }

const App = ()=>{

  return(

    
    
    <Router>
      <Routes>
        
        <Route path='/' element={<LoginPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/fraccRegister' element={<FraccPage></FraccPage>}></Route>
      </Routes>
    </Router>
  );
};
export default App;
