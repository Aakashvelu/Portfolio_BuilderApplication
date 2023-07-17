import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import RegistrationPage from './components/Register';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Features/user';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

const store = configureStore({
  reducer:{
    user:userReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Navbar/> */}
    {/* <Home/> */}
    <Provider store={store}>

    <App />
    </Provider>
    
  </BrowserRouter>
  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<LoginPage/>}></Route>
  //   <Route path="/register" element={<RegistrationPage/>}></Route>
  //   <Route path="/app" element={<App/>}></Route>
  // </Routes>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
