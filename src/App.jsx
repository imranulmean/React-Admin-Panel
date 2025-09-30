import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RightSidebarComp from './components/RightSidebarComp';
import SideabarComp from './components/SidebarComp';
import TopbarComp from './components/TopbarComp';
import Dashboard from './pages/Dashboard';
import ImageUpload from './pages/ImageUpload';

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