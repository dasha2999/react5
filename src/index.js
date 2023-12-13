import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, SearchUserPage, UserPage, NotFoundPage } from './components/pages';
// import { MainPage } from './components/pages';
// import { AboutPage } from './components/pages/AboutPage';
import './index.css';
import App from './components/app/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/search' element={<SearchUserPage />} />
    <Route path='/user/:userId' element={<UserPage />} />
    <Route path='*' element={<NotFoundPage />} />
    {/* <Route path='/about' element={<AboutPage />} /> */}
  </Routes>
  </BrowserRouter>
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
);
