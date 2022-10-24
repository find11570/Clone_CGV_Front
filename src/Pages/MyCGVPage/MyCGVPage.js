import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import MyCGV from "../../components/MyCGV/MyCGV";
import Footer from "../../components/Footer/Footer";
const MyCGVPage = () => {

  return (
    <div>
      <Header />
      <Navbar />
      <MyCGV />
      <Footer />
    </div>
  );
};

export default MyCGVPage;