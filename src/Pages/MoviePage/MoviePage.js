import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Movie from '../../components/Movie/Movie';
import Footer from "../../components/Footer/Footer";

const MoviePage = () => {
    return (
        <section>
            <Header/>
            <Navbar/>
            <Movie/>
            <Footer/>
        </section>
    );
};

export default MoviePage;