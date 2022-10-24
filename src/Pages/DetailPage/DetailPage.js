import React from "react";
import { useLocation } from "react-router-dom";
import "./DetailPage.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MovieDetail from "../../components/MovieDetail/MovieDetail";

const DetailPage = (props) => {
  // 현재 props는 영화 id
  // req : 영화 id, res : 상세 정보
const location = useLocation();
const movie_id = location.state.movie_id;
console.log(movie_id);
  return (
    <div>
      <Header />
      <Navbar />
      <MovieDetail movie_id={movie_id} />
      <Footer />
    </div>
  );
};

export default DetailPage;
