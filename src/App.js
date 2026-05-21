import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/client/Home';
import Header from './componets/client/common/Header';
import Footer from './componets/client/common/Footer';
import BackToTopBtn from './componets/client/common/BackToTopBtn';
import About from './pages/client/About';
import LangageProvider from './context/language.context';

function App(props) {
  return (
    <BrowserRouter>
      <LangageProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
        <BackToTopBtn />
      </LangageProvider>
    </BrowserRouter>
  );
}

export default App;