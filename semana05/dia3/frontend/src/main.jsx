import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Auth from './pages/Auth'
import Register from './pages/Register'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './css/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Auth />} />
      <Route path="register" element={<Register />} />
    </Routes>
 </BrowserRouter>
)
