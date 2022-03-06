import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './view/pages/About/about';
import Home from './view/pages/HomePage/Home';
import Search from './view/pages/Search/search'
import App from './App';
import { render } from "react-dom";
import Login from './view/pages/LogIn/Login';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
     
      <Route path="App" element={<App />} >
      
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

      
