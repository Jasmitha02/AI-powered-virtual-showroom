import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import CreateCar from './components/CreateCar';
import Modify from './components/Modify';
import List from "./components/List";
import Orders from "./components/Orders";
import SignIn from "./components/SignIn";
import Footer from './components/Footer';
import Home from "./components/Home";
import Maintain from "./components/Maintain";
import Repair from "./components/Repair";
import Upgrade from "./components/Upgrade";
import ShopList from './components/shoplist';

function App() {
  return (
    <div className="container-fluid">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/create" element={<CreateCar />} />
          <Route path="/modify/:id" element={<Modify />} />
          <Route path="/list" element={<List />} />
          <Route path="/maintain" element={<Maintain />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/shoplist/:id" element={<ShopList />} />
        </Routes>
        {localStorage.getItem('islogged') === 'true' && <Footer />}
      </HashRouter>
    </div>
  );
}

export default App;
