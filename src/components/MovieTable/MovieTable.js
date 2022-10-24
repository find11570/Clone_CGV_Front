import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Api/Api";
import "./MovieTable.css";


const MovieTable = () => {

  useEffect(() => {
    
  }, []);

  const navigate = useNavigate();
  const [isTrue, setIsTrue] = useState(true);
  const [isSale, setIsSale] = useState(false);
  const [saleType, setSaleType] = useState("");
  const [salePrice, setSalePrice] = useState();
  const [salePercent, setSalePercent] = useState();
  const [screenId, setScreenId] = useState();

  const [seat1, setSeat1] = useState();
  const [seat2, setSeat2] = useState();
  const [seat3, setSeat3] = useState();
  const [seat4, setSeat4] = useState();
  const [seat5, setSeat5] = useState();
 
  useEffect(()=> {
    seat_aval();
  });

  const onClick = (id) => {
    setScreenId(id);
    const user_id = sessionStorage.getItem("user_id");
    console.log(user_id)
    if(user_id) {
      if (user_id === "1") {
      setIsSale(true);
      }
      else {
        navigate("/ticket/seats", { state: { screen_id: id }});
      }
    }
    else {
      alert("로그인 후 이용해주세요");
      navigate("/ticket/login");
    }
    
  };

  const seat_aval = async() => {
    const response1 = await Api.getSeatsAval(6);
    let count1 = await response1.data.count;
    setSeat1(count1);
    const response2 = await Api.getSeatsAval(7);
    let count2 = await response2.data.count;
    setSeat2(count2);
    const response3 = await Api.getSeatsAval(8);
    let count3 = await response3.data.count;
    setSeat3(count3);
    const response4 = await Api.getSeatsAval(9);
    let count4 = await response4.data.count;
    setSeat4(count4);
    const response5 = await Api.getSeatsAval(10);
    let count5 = await response5.data.count;
    setSeat5(count5);
  };


  const handleClickRadioButton = (e) => {
    
    setSaleType(e.target.value);
    var input = document.getElementById("sale-price");
    input.value = null;
    var input2 = document.getElementById("sale-percent");
    input2.value = null;
    
  }

  const sendSaleData = async (data) => {
    if(saleType === "정률할인") {
      if (parseInt(data.value) > 0 && parseInt(data.value) < 100) {
        const peeObj = {
          feePolicyStatus: "REGULAR",
          flatRate: 0,
          regular_percent: parseInt(data.value),
        };
        const response = await Api.postSaleSet(screenId, peeObj);
        console.log(response);
        if (response.screen_id) {
          alert(data.value + "% 의 할인이 적용되었습니다");
        } else {
          alert("다시 시도하세요");
        }
      }
      else {
        alert("잘못된 값입니다. 0~100 사이의 값을 입력하세요");
        return;
      }
      
    }
    if(saleType === "정책할인") {
      if (parseInt(data.value) >= 5000) {
        alert("잘못된 값입니다. 5000원보다 작은 값을 입력하세요");
        return;
      }
      const peeObj = {
        feePolicyStatus: "FLAT_RATE",
        flatRate: parseInt(data.value),
        regular_percent: 0,
      };
      const response = await Api.postSaleSet(screenId, peeObj);
      if(response.screen_id) {
         alert(data.value + "원 의 할인이 적용되었습니다");
      }
      else {
         alert("다시 시도하세요");
      }
    }
  };

  const salePriceView = () => {
      return (
        <div>
          <label>할인할 가격을 입력하세요</label>
          <input
            id="sale-price"
            value={salePrice}
            name="sale-price"
            type="text"
          />
          <button
            id="sale-button"
            type="button"
            onClick={() => sendSaleData(document.getElementById('sale-price'))}
          >
            전송
          </button>
        </div>
      );
  };

  const salePercentView = () => {
      return (
        <div>
          <label>할인할 비율을 입력하세요</label>
          <input
            id="sale-percent"
            value={salePercent}
            name="sale-percent"
            type="text"
          />
          <button
            id="sale-button2"
            type="button"
            onClick={() => sendSaleData(document.getElementById("sale-percent"))}
          >
            전송
          </button>
        </div>
      );
  };

  const saleView = () => {
    return (
      <div>
        <div>
          <input
            id="정률할인"
            value="정률할인"
            name="sale"
            type="radio"
            checked={saleType === "정률할인"}
            onChange={handleClickRadioButton}
          />
          <label>정률할인</label>
          <input
            id="정책할인"
            value="정책할인"
            name="sale"
            type="radio"
            checked={saleType === "정책할인"}
            onChange={handleClickRadioButton}
          />
          <label>정책할인</label>
        </div>
        <div>
          {isSale && saleType === "정률할인" ? salePercentView() : saleType === "정책할인" ? salePriceView() : null}
        </div>
      </div>
    );
  }

  return (
    <section className="table-container">
      <br />
      <br />
      <br />
      <br />
      <div className="theater-title">
        <h3>
          <img
            src="https://img.cgv.co.kr/R2014/images/title/h3_theater.gif"
            alt="THEATER"
          />
        </h3>
      </div>
      <div class="theater-tit">
        <h4>
          <span>CGV 구미</span>
        </h4>
      </div>
      <div class="wrap-theaterinfo">
        <div class="box-image">
          <div id="theater_img_container" class="thumb-image">
            <img
              src="https://img.cgv.co.kr/Theater/Theater/2014/1211/noimage_final(17).jpg"
              alt="CGV극장 기본 이미지"
            />
          </div>
        </div>
        <div class="box-contents3">
          <div class="theater-info">
            <strong class="title">
              경상북도 구미시 원평동 68-1번지
              <br />
              경상북도 구미시 구미중앙로 44, 4층(원평동)
              <a href="./?page=location&amp;theaterCode=0053#menu">
                위치/주차 안내 &gt;
              </a>
            </strong>
            <span class="txt-info">
              <em>1544-1122</em>
              <em>10관 / 1,640석</em>
              <span></span>
            </span>
          </div>
        </div>
      </div>
      <div className="theater">
        <div className="movie-data2">
          <div className="box">
            <div className="header">
              <div class="title">
                <span class="ico2-grade grade-15"> 15세 이상</span>
                <strong>범죄도시2</strong>
                <em class="round lightblue">
                  <span>상영중</span>
                </em>
                <span id="detail">
                  &nbsp;&nbsp;&nbsp;범죄, 액션 / 106분 / 2022.05.18 개봉
                </span>
              </div>
            </div>
            <div className="time_seat">
              <div className="info">
                <span>
                  ▶&nbsp;&nbsp;&nbsp;&nbsp;2D&nbsp;&nbsp;|&nbsp;&nbsp;1관
                  1층&nbsp;&nbsp;|&nbsp;&nbsp;총 20석
                </span>
              </div>
              <div className="starttimebtn">
                <div className="am" onClick={() => onClick(6)}>
                  <p>12:00</p>
                  <p>{seat1}석</p>
                </div>
                <div className="am" onClick={() => onClick(8)}>
                  <p>14:00</p>
                  <p>{seat3}석</p>
                </div>
                <div className="am" onClick={() => onClick(9)}>
                  <p>16:00</p>
                  <p>{seat4}석</p>
                </div>
              </div>
              <div className="info">
                <span>
                  ▶&nbsp;&nbsp;&nbsp;&nbsp;2D&nbsp;&nbsp;|&nbsp;&nbsp;2관
                  2층&nbsp;&nbsp;|&nbsp;&nbsp;총 20석
                </span>
              </div>
              <div className="starttimebtn">
                <div className="am" onClick={() => onClick(7)}>
                  <p>13:00</p>
                  <p>{seat2}석</p>
                </div>
                <div className="am" onClick={() => onClick(10)}>
                  <p>16:00</p>
                  <p>{seat5}석</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSale ? saleView() : null}
    </section>
  );
};

export default MovieTable;
