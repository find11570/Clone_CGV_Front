import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RankInput from "../RankInput/RankInput";
import Api from "../../Api/Api";
import "./MovieDetail.css";

const MovieDetail = ({ movie_id }) => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  const getData = async () => {
    const response = await Api.getMovieDetailRead(movie_id);
    console.log(response.data);
    setData(response.data);
    const date1 = new Date(response.data.release_date);
    console.log(date1);
    setDate(date1.toLocaleDateString());
  };

  useEffect(() => {
    console.log(movie_id);
    getData();
  }, []);

  const [isUser, setIsUser] = useState(true); // 일단 true로
  const onClick = () => {
    // 1. 회원인지 확인 -> 회원 아니면 이용 못함
    // setIsUser(false);
    // 2. 회원이면 평점 작성 진행
    // setIsUser(true);
    // useEffect로 isUser 바뀔때 마다 렌더링
  };

  const navigate = useNavigate();
  const onClick2 = (name) => {
    // 상세페이지 이동  상세페이지에 id전달
    // navigate('/detail', {id:id})
    navigate("/ticket", { state: { movie_name: name } });
  };

  return (
    <section className="movie-detail">
      <div class="sect-base-movie">
        <h3 class="h3-tag">
          <strong>{data.movie_name}</strong>기본정보
        </h3>
        <div class="box-image2">
          <a>
            <span class="thumb-image">
              <img
                src={data.url}
                alt="브로커 포스터 새창"
                onerror="errorImage(this)"
              />
              <span class="ico-grade grade-12"> 12세 이상</span>
            </span>
          </a>
        </div>
        <div class="box-contents2">
          <div class="title">
            <strong>{data.movie_name}</strong>
            <em class="round lightblue">
              <span>현재상영중</span>
            </em>
            <p>Broker</p>
          </div>
          <div class="score2">
            <strong class="percent">
              예매율&nbsp;<span>{data.ticketRating}%</span>
            </strong>
            <div class="egg-gage small">
              <span class="egg good"></span>
              <span class="percent">{data.reviewRating}%</span>
            </div>
            <br />
            <hr />
          </div>
          <div class="spec">
            <ul>
              <li>
                감독 : {data.director} / 배우 : {data.actor}
              </li>
              <li>
                장르 : {data.genre} / 기본 : 12세 이상, {data.runtime}분
              </li>
              <li>개봉 : {date}</li>
            </ul>
          </div>
          <span class="screentype"></span>
          <span class="like">
            <a
              class="link-reservation"
              onClick={() => onClick2(data.movie_name)}
            >
              예매
            </a>
          </span>
        </div>
      </div>
      <section id="detail-review-input">
        <div id="review-text-box">
          <div style={{ fontSize: "1.0rem" }}>
            관람일 포함 7일 이내 관람평을 남기시면{" "}
            <span style={{ color: "#FB4357" }}>CJ ONE 20P</span>가 적립됩니다.
          </div>
          <span style={{ fontSize: "0.8em" }}>
            00명의 실관람객이 평가해주셨습니다.
          </span>
        </div>
        <div id="review-btn-box">
          <button id="detail-rank-btn" className="detail-btn" onClick={onClick}>
            평점 작성
          </button>
          <button id="detail-my-rank-btn" className="detail-btn">
            내 평점
          </button>
        </div>
      </section>
      <div class="detail-review-read">
        <section id="detail-review-read">
          {isUser ? <RankInput /> : <div>나는 유저 아님</div>}
        </section>
      </div>
    </section>
  );
};

export default MovieDetail;
