import React from 'react';
import CategoryList from '../../../Blog/CategoryList';
import About from './About';
import Exemplar from './Exemplar';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import LatestNews from './LatestNews';
import Navbar from './Navbar';
import SocialBrand from './SocialBrand';

const Landing = () => {
  return (
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
  );
};

export default Landing;
