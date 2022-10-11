import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import MainList from './pages/MainList';
import Detail from './pages/Detail';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
       <Navbar />
       <Routes>
          <Route index element={<Home /> } />
          <Route path="/" element={<Home />} />
          <Route path="outer/:para" element={<MainList />} />
          <Route path="dress/:para" element={<MainList />} />
          <Route path="top/:para" element={<MainList />} />
          <Route path="bottom/:para" element={<MainList />} />
          <Route path="datail/:num" element={<Detail />} />
       </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App