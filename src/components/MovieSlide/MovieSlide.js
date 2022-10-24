import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Api from "../../Api/Api";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./MovieSlide.css";

SwiperCore.use([Navigation, Pagination]);
const MovieSlide = (props) => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await Api.getMovieListForTicketRating();
    console.log(response);
    setData(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  // 영화 정보를 props로 받아 출력해주기

  // 이미지 클릭 시 상세페이지 이동 구현하기(전달 인자는 영화 id)
  const onClick = (id) => {
    // 상세페이지 이동  상세페이지에 id전달
    // navigate('/detail', {id:id})
    navigate("/detail", { state: { movie_id: id } });
  };

  const onClick2 = (name) => {
    // 상세페이지 이동  상세페이지에 id전달
    // navigate('/detail', {id:id})
    navigate("/ticket", { state: { movie_name: name } });
  };

  return (
    <div class="swiper-container">
      <Swiper
        className="banner"
        spaceBetween={40}
        slidesPerView={5}
        slidesPerGroup={5}
        initialSlide="2"
        loopFillGroupWithBlank={true}
        loop={true}
        navigation
        pagination={{ type: "fraction" }}
        style={{ width: "70%", height: "35vh" }}
      >
        {data &&
          data.map((item, i) => (
            <SwiperSlide className="swiper-slide" key={i}>
              <div class="swiper-slide-view">
                <div class="img_wrap" data-scale="false">
                  <div class="thumbnail">
                    <img
                      class="mt_img"
                      src={item.url}
                      alt="movie-thumbnail"
                      width="170px"
                      height="234px"
                    />
                    <img
                      class="grade_img"
                      src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-12.png"
                      alt="12세 이상세"
                    />
                    <div class="movie-btn-list" id="mouse_over">
                      <a
                        id="detail-read"
                        class="movie-btn"
                        onClick={() => onClick(item.movieId)}
                      >
                        상세보기
                      </a>
                      <a
                        id="reserve"
                        class="movie-btn"
                        onClick={() => onClick2(item.movieName)}
                      >
                        예매하기
                      </a>
                    </div>
                  </div>
                  <div class="movie-data">
                    <div class="movieName">
                      <strong>{item.movieName}</strong>
                    </div>
                    <div class="movie_info_wrap">
                      <span>
                        {" "}
                        <img
                          src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                          alt="Golden Egg great"
                          width="16px"
                          height="16px"
                        />{" "}
                        {item.reviewRating}%
                      </span>
                      <span> 예매율 {item.ticketRating}% </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
export default MovieSlide;
