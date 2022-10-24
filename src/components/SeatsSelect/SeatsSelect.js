import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Api/Api";
import "./SeatsSelect.css"
import * as S from "./SeatsSelect.Style";

const SEATS_LIST = [
  { id: 101, data: 1, unused: true },
  { id: 102, data: 2, unused: false },
  { id: 103, data: 3, unused: false },
  { id: 104, data: 4, unused: false },
  { id: 105, data: 5, unused: false },
];

const SeatsSelect = ({screen_id}) => {
  const [seats, setSeats] = useState([]);

  const getSeats = async () => {
    const response = await Api.getScreenSeatsAval(screen_id);
    console.log(response.data.data);
    const seat = await response.data.data;
    setSeats([...seat]);
  };
  useEffect(() => {
    console.log(screen_id);
    console.log(SEATS_LIST);
    getSeats();
  }, []);

  // 데이터를 넣을 빈배열
  const [checkedList, setCheckedList] = useState([]);
  
  const navigate = useNavigate();
  const onClick = async (seatlist) => {
    const user_id = sessionStorage.getItem("user_id");
    const tmparr = checkedList.map((item, idx) => {
      return parseInt(item, 10);
    })
    const reserveObj = {
      screen_id: screen_id,
      user_id: user_id,
      seat_arr: tmparr,
    };
    console.log(reserveObj);
    const response = await Api.postReserve(reserveObj);
    if (!response.err && response.price) {
      alert("예매가 완료되었습니다. 총 "+response.price+"원이 결제되었습니다.");
      navigate("/");
    } else {
      console.log(response);
    }
    
  };

  const onCheckedElement = (checked, item) => {
    console.log(checkedList);
    if (checkedList.length < 4) {
        if (checked) {
          setCheckedList([...checkedList, item]);
        } else if (!checked) {
          setCheckedList(checkedList.filter((el) => el !== item));
        }
    }
    else {
      return;  
    }
      
  };

  const onRemove = (item) => {
    setCheckedList(checkedList.filter((el) => el !== item));

  };

  const reservation = () => {
    return (
      <div className="btn-area">
        <div className="select-seats" onClick={() => onClick(checkedList)}>
          <a className="btn-right" id="tnb_step_btn_right" title="좌석선택">
            예매
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-select">
      <div className="selecter">
        <S.CategoryContainer>
          <S.Title>좌석선택</S.Title>
          <S.SubTitle>좌석은 최대 4개까지 선택 가능합니다.</S.SubTitle>
          <S.SelectContainer>
            <S.CheckBox>
              {seats.map((item) => {
                if (item.unused === true) {
                  return (
                    <S.Label key={item.seat_id}>
                      <S.Check
                        type="checkbox"
                        value={item.data}
                        onChange={(e) => {
                          onCheckedElement(e.target.checked, e.target.value);
                        }}
                        checked={checkedList.includes(item.data) ? true : false}
                      />
                      <S.Type>{item.data}</S.Type>
                    </S.Label>
                  );
                } else {
                  return (
                    <S.Label key={item.seat_id}>
                      <S.Check
                        type="checkbox"
                        value={item.data}
                        onChange={(e) => {
                          onCheckedElement(e.target.checked, e.target.value);
                        }}
                        checked
                        disabled
                      />
                      <S.Type>{item.data}</S.Type>
                    </S.Label>
                  );
                }
              })}
            </S.CheckBox>
            <S.SelectedBox>
              {checkedList.length === 0 && (
                <S.AlertMessage>{"좌석을 선택해주세요."}</S.AlertMessage>
              )}
              {checkedList.map((item) => {
                return (
                  <S.SelectedCategory key={item}>
                    <S.Selected>{item}</S.Selected>
                    <S.CancelChecked onClick={() => onRemove(item)}>
                      X
                    </S.CancelChecked>
                  </S.SelectedCategory>
                );
              })}
            </S.SelectedBox>
          </S.SelectContainer>
        </S.CategoryContainer>
      </div>
      {checkedList.length !== 0 ? reservation() : null}
    </div>
  );
}

export default SeatsSelect;