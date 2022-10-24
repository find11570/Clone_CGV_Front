import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MovieSelect from "../../components/MovieSelect/MovieSelect";
import Footer from "../../components/Footer/Footer";
import "./TicketPage.css";

function TicketPage(props) {
  const [movie_name, set_movie_name] = useState();
  const location = useLocation();
  useEffect(()=> {
    if (location.state) {
      const name = location.state.movie_name;
      set_movie_name(name);
    } else {
      set_movie_name("범죄도시2");
    }
    console.log(movie_name);
  },[]);
  

  return (
    <div>
      <Header />
      <Navbar />
      <MovieSelect movie_name={movie_name} />
      <Footer />
    </div>
  );
}

export default TicketPage;
