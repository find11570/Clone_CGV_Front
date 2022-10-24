import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieSelect.css"
import * as S from "./MovieSelect.Style";

const TIME_LIST = [
  { id: 6, data: "12:00" },
  { id: 7, data: "13:00" },
  { id: 8, data: "14:00" },
  { id: 9, data: "16:00" },
  { id: 10, data: "16:00" },
];

function MovieSelect ({movie_name}) {
  const MOVIE_LIST = [
  { id: 0, data: movie_name },
];
  // 데이터를 넣을 빈배열
  const [checkedList, setCheckedList] = useState([]);
  const [checkedList2, setCheckedList2] = useState([]);
  
  const navigate = useNavigate();

  const outputSI = (element) => {
    if (element.data === checkedList2[0]) {
      return true;
    }
  }
  const onClick = (e) => {
    const user_id = sessionStorage.getItem("user_id");
    if (user_id) {
      const data = TIME_LIST.find(outputSI);
      console.log(data.id);
      navigate("/ticket/seats", { state: { screen_id: data.id } });
    } else {
      alert("로그인 후 이용해주세요");
      navigate("/ticket/login");
    }
    
  };

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };

  const onCheckedElement2 = (checked, item) => {
    if (checked) {
      setCheckedList2([item]);
    } else if (!checked) {
      setCheckedList2(checkedList.filter((el) => el !== item));
    }
  };

  const onRemove = (item) => {
    setCheckedList([]);
    setCheckedList2([]);
    // setCheckedList(checkedList.filter((el) => el !== item));
    // setCheckedList2(checkedList2.filter((el) => el !== item));
  };

  const loadTimeTable = () => {
    return (TIME_LIST.map((item) => {
        return (
        <S.Label key={item.id}>
            <S.Check
            type="checkbox"
            value={item.data}
            onChange={(e) => {
                onCheckedElement2(e.target.checked, e.target.value);
            }}
            checked={checkedList2.includes(item.data) ? true : false}
            />
            <S.Type>{item.data}</S.Type>
        </S.Label>
        );
    }));
  };

  const reservation = () => {
    return (
      <div className="btn-area">
        <div className="select-seats" onClick={() => onClick()}>
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
          <S.Title>예매하기</S.Title>
          <S.SelectContainer>
            <S.CheckBox>
              {MOVIE_LIST.map((item) => {
                return (
                  <S.Label key={item.id}>
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
              })}
            </S.CheckBox>
            <S.CheckBox>
              {movie_name === "범죄도시2" && checkedList.length !== 0 ? loadTimeTable() : null}
            </S.CheckBox>
            <S.SelectedBox>
              {checkedList2.length === 0 && (
                <S.AlertMessage>{"영화, 시간을 선택해주세요."}</S.AlertMessage>
              )}
              {checkedList2.map((item) => {
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
      {checkedList.length !== 0 && checkedList2.length !== 0 ? reservation() : null}
    </div>
  );
}

export default MovieSelect;