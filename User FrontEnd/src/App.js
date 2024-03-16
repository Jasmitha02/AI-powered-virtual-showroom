import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "../src/components/footer.css"
import Footer from "./components/Footer";
import ItemDetails from './components/ItemDetails';
import Pay from "./components/Pay";
import Registered from './components/Registerd';
import Maintain from "./components/Maintain";
import Repair from "./components/Repair";
import Upgrade from "./components/Upgrade";
import Login from "./components/Login";
import SignIn from './components/SignIn';
function App() {
  return (
   
    <div class="fluid">
     <HashRouter>
      <Nav/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/itemdetails/:id" element={<ItemDetails />}/>
        <Route path="/pay/:id" element={<Pay/>}/>
        <Route path="/registered/:id" element={<Registered/>}/>
        <Route path="/maintain" element={<Maintain/>}/>
        <Route path="/repair" element={<Repair/>}/>
        <Route path="/upgrade" element={<Upgrade/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
     </HashRouter>
    
    </div>
   
  );
}

export default App;