import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RightSidebarComp from './components/RightSidebarComp';
import SideabarComp from './components/SidebarComp';
import TopbarComp from './components/TopbarComp';
import Dashboard from './pages/Dashboard';
import Datatable from './pages/Datatable';
import Inbox from './pages/Email/Inbox';
import ReadEmail from './pages/Email/ReadEmail';
import ImageUpload from './pages/ImageUpload';
import LockScreen from './pages/LockScreen';
import LockScreen2 from './pages/LockScreen2';
import Login from './pages/Login';
import Login2 from './pages/Login2';
import RecoverPassword from './pages/RecoverPassword';
import RecoverPassword2 from './pages/RecoverPassword2';
import Register from './pages/Register';
import Register2 from './pages/Register2';
import Widgets from './pages/Widgets';

export default function App(){

  return(
    <div id="layout-wrapper">
      <BrowserRouter>      
        {/* <Megamenu /> */}
        {/* <Leftbar /> */}
        <TopbarComp />
        <SideabarComp />

        {/* <RightSidebarComp /> */}
        <Routes>        
          <Route path='/' element={<Dashboard />} />
          <Route path="/imageUpload" element={<ImageUpload/>} />
          <Route path="/datatable" element={<Datatable/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/recover-password" element={<RecoverPassword/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/lock-screen" element={<LockScreen/>} />
          <Route path="/login2" element={<Login2/>} />
          <Route path="/register2" element={<Register2/>} />
          <Route path="/recover-password2" element={<RecoverPassword2/>} />
          <Route path="/lock-screen2" element={<LockScreen2/>} />
          <Route path="/widgets" element={<Widgets/>} />
          <Route path="/email-inbox" element={<Inbox/>} />
          <Route path="/email-read" element={<ReadEmail/>} />
          {/* <Route element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/insertion' element={<Insertion />} />
            <Route path='/income' element={<Income />} />
            <Route path='/updateExp/:userId/:monthName/:year' element={<UpdateExp />} />
            <Route path='/updateIncome/:userId/:monthName/:year' element={<UpdateIncome />} />
            <Route path='/qrCodeGenerator' element={<QRcodeGenerator />} />
            <Route path='/qrCodeReader' element={<QrReader />} />
          </Route>

          <Route element= {<AdminPrivateRoute/>} >
            <Route path='/users' element={<Users />} />
          </Route>  */}

          {/* <Route path="*" element={<Navigate to="/" />} />    */}
        </Routes>
      </BrowserRouter>          
    </div>
  )
}