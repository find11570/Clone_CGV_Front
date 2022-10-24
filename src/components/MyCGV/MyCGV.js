import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import { getDefaultNormalizer } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Api from "../../Api/Api";
import "./MyCGV.css";

const MyCGV = () => {
  const [data, setData] = useState();
  const [ticket, setTicket] = useState([]);
  

  const getData = async () => {
    const user_id = sessionStorage.getItem("user_id");
    const response = await Api.getMyDataRead(user_id);
    console.log(response.data);
    if(response) {
      const myData = await response.data;
      setData(myData);
    }
    const response2 = await Api.getTicketRead(user_id);
    const ticketData = await response2.data.data;
    if(response2) {
      setTicket(ticketData);
      console.log(ticketData);
    }
    
  };
  useEffect(() => {
    getData();
  }, []);

  const ticketList = () => {
    if (ticket.length === 0) {
      return (
        <div id="my-ticket-info">
          고객님의 최근 예매내역이 존재하지 않습니다.
        </div>
      );
    } else {
      return (
        <div id="my-ticket-info">
          {ticket.map((item) => {
            return (
              <div>
                <p>
                  예매번호 : {item.reserve_id} / 영화 제목 :{" "}
                  {item.screen_id.movie.movieName} / 관람 일자 :{" "}
                  {item.screen_id.screenTime} / 좌석 : {item.seats} / 결제 금액
                  : {item.price} 원
                </p>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div class="mycgv-container">
      <section>
        <article id="my-container">
          <div id="my-box">
            <h2>{data.name}님&nbsp;&nbsp;&nbsp;</h2>
            <span>{data.loginid}</span>
            <hr />
            <h4>
              고객님은 <u>일반</u> 입니다.
            </h4>
          </div>
        </article>

        <article id="my-ticket-container">
          <h3>MY 예매내역</h3>
          <span>
            예매번호로만 티켓을 찾을 수 있으니 반드시 확인 부탁드립니다.
          </span>
          {ticketList()}
        </article>
      </section>
    </div>
  );
};

export default MyCGV;
