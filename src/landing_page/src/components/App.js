import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import CategoryList from '../../../App/Blog/CategoryList';
import About from './About';
import Exemplar from './Exemplar';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import LatestNews from './LatestNews';
import Navbar from './Navbar';
import SocialBrand from './SocialBrand';

const App = () => {
  return (
    <BrowserRouter>
      <div id="app">
        <Navbar />
        <Hero />
        <CategoryList />
        <Exemplar />
        <Features />
        <About />
        <LatestNews />
        <SocialBrand />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
