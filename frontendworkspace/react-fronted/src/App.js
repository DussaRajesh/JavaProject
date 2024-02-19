import logo from './logo.svg';
import './App.css';
import ListEmployeComponent from './component/ListEmployeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <HeaderComponent/>
    <Router>

     <div className="container">
    <Routes>
      <Route exact path="/" element={<ListEmployeComponent/>}></Route>
      <Route path="/employees" element={<ListEmployeComponent/>}></Route>
      <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
      <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
    </Routes>	
    </div>
   </Router>
    <FooterComponent/>
    </div>
  )
}

export default App;
