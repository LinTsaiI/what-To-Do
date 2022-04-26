import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from './container/App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);