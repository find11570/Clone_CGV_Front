import React, { useEffect, useState } from 'react';
import './RankInput.css';

import RankTextBox from '../RankTextBox/RankTextBox';

const RankInput = () => {

    const [star, setStar] = useState(); // 별점
    const [ranktext, setRankText] = useState(); // 평점 내용

    const onChangeSelect = (e) => {
        setStar(e.currentTarget.value);
    }

    const onRankTextHandler = (e) => { 
        setRankText(e.currentTarget.value);
    }

    const onClick = () => {
        // star, ranktext, 영화, 유저 정보를 post로 보내어 등록 
        
    }

    useEffect(() => {
        // 첫 렌더링 시 
        // user의 아이디를 조회 -> user가 작성한 리뷰가 있다면 출력
        // 받는 값 : user의 리뷰 작성 목록
    }, [])
    
    return (
      <section id="rank-box">
        <div class="review-input">
          <p>당신은 회원이시군요. 평점 작성이 가능합니다 !</p>
          <div id="rank-input-box">
            <article id="r-a">
              <select value={star} onChange={onChangeSelect}>
                <option defaultValue>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </article>
            <article id="r-b">
              <input
                type="text"
                value={ranktext}
                onChange={onRankTextHandler}
                placeholder="  평점을 작성해주세요 !"
              />
              <button onClick={onClick}>등록</button>
            </article>
          </div>
        </div>
        <div id="back-white">
          <br />
          <br />
          <hr />
          <br />
        </div>
        {/* id, 텍스트   */}
        <div id="review-text-container">
          <RankTextBox />
          <RankTextBox />
          <RankTextBox />
        </div>
      </section>
    );
};

export default RankInput;