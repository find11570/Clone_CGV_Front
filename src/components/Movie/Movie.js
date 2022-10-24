import React, { useState, useEffect } from "react";
import "./Movie.css";
import Api from "../../Api/Api";
import MovieItem from "../MovieItem/MovieItem";

// 무비 차트 부분
const Movie = () => {
  // get으로 영화 전체 받아오기
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();

  const getData = async () => {
    const response = await Api.getMovieListRead();
    console.log(response);
    setData(response.data.data);
  };

  const sortMovie = async () => {
    var sortState = document.getElementById("order_type").value;
    if (sortState === "1") {
      const response = await Api.getMovieListForTicketRating();
      setData(response.data.data);
    }
    if (sortState === "2") {
      const response = await Api.getMovieListForReviewRating();
      setData(response.data.data);
    }
  };

  const searchButton = async () => {
    var searchValue = document.getElementById("header_keyword").value;
    const response = await Api.postSearchMovie(searchValue);
    setData(response.data.data);
    document.getElementById("header_keyword").value = null;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="movie-container">
      <div class="title-wrap">
        <h3>
          <strong>무비차트</strong>
        </h3>
      </div>
      <section class="sort-chart" style={{ textAlign: "right" }}>
        <div class="sect-sorting">
          <div class="totalSearch_wrap">
            <label for="totalSearch">
              <input
                type="text"
                id="header_keyword"
                value={search}
                placeholder="영화 제목 혹은 배우를 검색"
              />
            </label>
            <button
              type="button"
              class="btn_totalSearch"
              id="btn_header_search"
              onClick={() => searchButton()}
            />
          </div>

          <select id="order_type" name="order-type">
            <option value="1">
              예매율순
            </option>
            <option value="2">평점순</option>
          </select>
          <button type="button" class="btn_familysite" onClick={() => sortMovie()}>
            <span>
              <strong>GO</strong>
            </span>
          </button>
        </div>
      </section>
      <section id="movie-big-box">
        {data && data.map((item, i) => <MovieItem class="movie-item" no={i+1} data={item} />)}
      </section>
    </section>
  );
};

export default Movie;
