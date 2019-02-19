import React from 'react';
import './App.css';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
//import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className = "app">
    <div className = "logo">
      
    </div>
    <div>
      <HeaderContainer />
      <HeaderTitle />
      <ImageThumbnail />
      <CardContainer />

    </div>
    </div>
  );
};

export default App;
