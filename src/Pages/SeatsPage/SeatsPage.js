import React from 'react';
import { useLocation } from "react-router-dom";
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import SeatsSelect from "../../components/SeatsSelect/SeatsSelect";
import Footer from "../../components/Footer/Footer";
import './SeatsPage.css';

function SeatsPage(props) {
  const location = useLocation();
const screen_id = location.state.screen_id;
console.log(screen_id);
    return (
      <div>
        <Header />
        <Navbar />
        <SeatsSelect screen_id={screen_id}/>
        <Footer />
      </div>
    );
}

export default SeatsPage;