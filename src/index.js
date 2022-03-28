import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Search from './Search';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/first=:firstLetter&last=:lastLetter" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);