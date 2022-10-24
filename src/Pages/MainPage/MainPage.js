import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer";
import './MainPage.css';
import MainCarousel from '../../components/Carousel/MainCarousel';
import MovieSlide from '../../components/MovieSlide/MovieSlide'
import { Link } from "react-router-dom";

function MainPage() {

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>영화 그 이상의 감동, CGV</title>
        </Helmet>
        <Header />
        <Navbar />
        <main>
          <section id="carousel">
            <MainCarousel />
          </section>
          <div class="movie-content">
            <div id="movie-slide">
              <div class="content-title">
                <strong>무비차트</strong>
                <Link className="navItem" to="/movie">
                  <a
                    href="/movies/?lt=1&amp;ft=0"
                    id="btn_allView_Movie"
                    class="btn_allView"
                  >
                    전체보기
                  </a>
                </Link>
              </div>
              <MovieSlide />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
};


export default MainPage;