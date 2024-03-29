
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Sighnin from './pages/Sighnin';
import Overview from './pages/dashboard/Overview';
import Processes from './pages/dashboard/Processes';
import Sittings from './pages/dashboard/Sittings';
import Medals from './pages/dashboard/Medals';
import Shop from './pages/dashboard/Shop';
import Orders from './pages/dashboard/Orders';
import AdminOrder from './pages/admin/AdminOrder';
import AdminCompts from './pages/admin/AdminCompts';
import AdminShop from './pages/admin/AdminShop';



function App() {
  return (
    <div className="App">
      <Router>
       
       <Routes>
            <Route path='' element={<Home/>} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/sighnin' element={<Sighnin/>} />

            <Route path='/dashboard' element={<Overview/>} />
            <Route path='/dashboard/overview' element={<Overview/>} />
            <Route path='/dashboard/processes' element={<Processes/>} />
            <Route path='/dashboard/sittings' element={<Sittings/>} />
            <Route path='/dashboard/Medals' element={<Medals/>} />
            <Route path='/dashboard/Shop' element={<Shop/>} />
            <Route path='/dashboard/orders' element={<Orders/>} />

            <Route path='/admin/dashboard' element={<AdminOrder/>} />
            <Route path='/admin/dashboard/orders' element={<AdminOrder/>} />
            <Route path='/admin/dashboard/Compts' element={<AdminCompts/>} />
            <Route path='/admin/dashboard/Shop' element={<AdminShop/>} />
            
       </Routes>
      </Router>
      
    </div>
  );
}

export default App;
