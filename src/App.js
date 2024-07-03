
// import './App.css';
import Appbar from './components/AppBar';
import Sidebar from './components/SideBar';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AppBar, Box, CssBaseline, Toolbar} from '@mui/material';
import HomePage from './pages/HomePage';
import FraccPage from './pages/FraccPage';
import MapComponent from './components/MapComponent';
import ProtectedRoute from './components/ProtectedRoute';
import FlexboxDemo from './components/FlexboxDemo';
import GridComponent from './components/GridComponent';
import DashBoard from './components/Dashboard';


// function App() {
//   return (
//     <div className="App">

//       <Appbar></Appbar>
//       <Sidebar></Sidebar>
//     </div>
//   );
// }

const App = ()=>{

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = ()=>{

    setMobileOpen(!mobileOpen);

  };



  return(

    
    
    <Router>

      <Box sx={{display:'flex'}}>
        <CssBaseline/>
        {/* <Appbar handleDrawerToggle={handleDrawerToggle}/> */}
        {/* <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/> */}
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${240}px)` } }}
        >
          <Toolbar></Toolbar>
          <Routes>
            
            {/* <Route path='/' element={<LoginPage/>} /> */}
            <Route path='/' element={<FlexboxDemo/>} />
            <Route path='/dashboard' element={<DashBoard/>}/>
            <Route path='/grid' element={<GridComponent/>}/>
            <Route path='/flexboxdemo' element={<FlexboxDemo/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/home' element={<HomePage></HomePage>}/>
            <Route path='/fraccRegister' element={<FraccPage></FraccPage>}/>
            <Route path='/map' 
                  element={<ProtectedRoute element={MapComponent}/>} 
            />
          </Routes>

        </Box>
        
      </Box>


      
    </Router>
  );
};
export default App;
