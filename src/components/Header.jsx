import React from "react";
import "../assets/style/header.css";

// Date 객체는 생성자 함수을 사용해 현재 날짜와 시간을 불러옴
const today = new Date();
const CreatedDate = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일`;

const Header = () => {
  return (
    <div className="header_wrap">
      <h1 className="logo">
        TODO LIST <div className="logo_animation">🫠</div>
      </h1>
      <h2>{CreatedDate}</h2>
    </div>
  );
};
export default Header;
