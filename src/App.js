import React from 'react';
import './App.css';
// import react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import pages
import MainPage from './Pages/MainPage/MainPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import MoviePage from './Pages/MoviePage/MoviePage';
import DetailPage from './Pages/DetailPage/DetailPage';
import TheaterPage from "./Pages/TheaterPage/TheaterPage";
import TicketPage from "./Pages/TicketPage/TicketPage";
import SeatsPage from "./Pages/SeatsPage/SeatsPage";
import MyCGVPage from "./Pages/MyCGVPage/MyCGVPage";

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ticket/login" element={<LoginPage />} />
          <Route path="/join" element={<RegisterPage />} />
          <Route path="/mycgv" element={<MyCGVPage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/theater" element={<TheaterPage />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/ticket/seats" element={<SeatsPage />} />
        </Routes>
      </Router>
    );
}

export default App;
