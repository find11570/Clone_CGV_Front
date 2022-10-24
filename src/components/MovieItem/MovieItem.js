import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieItem.css";

// 영화 리스트 박스 하나
const MovieItem = (props) => {
  const navigate = useNavigate();
  const [date, setDate] = useState();
  
  useEffect(() => {
    const date1 = new Date(props.data.release_date);
    const date2 = date1.toLocaleDateString();
    console.log(date2);
    setDate(date2);
  }, []);
  
  const onClick = (id) => {
    navigate("/detail", { state: { movie_id: id } });
  };

  const onClick2 = (name) => {
    navigate("/ticket", { state: { movie_name: name } });
  };

  const cssChange = () => {
    if (props.no <= 3) {
      return <strong class="rankRed">No.{props.no}</strong>;
    } else {
      return <strong class="rank">No.{props.no}</strong>;
    }
  };

  return (
    <div class="movie-item">
      <div class="box-image">
        {cssChange()}
        <a>
          <span class="thumb-image">
            <img
              src={props.data.url}
              alt="포스터"
              onerror="errorImage(this)"
              onClick={() => onClick(props.data.movie_id)}
            />
            <span class="ico-grade grade-12">12세 이상</span>
          </span>
        </a>
        <span class="screentype"></span>
      </div>
      <div class="box-contents">
        <a>
          <strong class="title">{props.data.movie_name}</strong>
        </a>
        <div class="score">
          <strong class="percent">
            예매율<span>{props.data.ticketRating}%</span>
          </strong>
          <div class="egg-gage small">
            <span class="egg good"></span>
            <span class="percent">{props.data.reviewRating}%</span>
          </div>
        </div>
        <span class="txt-info">
          <strong>
            {date}
            <span>개봉</span>
          </strong>
        </span>
        <span class="like">
          <a
            class="link-reservation"
            onClick={()=> onClick2(props.data.movie_name)}
          >
            예매
          </a>
        </span>
      </div>
    </div>
  );
};

export default MovieItem;
