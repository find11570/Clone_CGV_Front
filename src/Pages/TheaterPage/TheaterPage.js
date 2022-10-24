import React from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import MovieTable from '../../components/MovieTable/MovieTable';
import Footer from "../../components/Footer/Footer";
import './TheaterPage.css';

function TheaterPage() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <MovieTable/>
            <Footer/>
        </div>
    );
}

export default TheaterPage;