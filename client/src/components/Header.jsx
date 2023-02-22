import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  //const { removeUser } = useAppContext();

  const isMember = localStorage.getItem("token") ? true : false;

  useEffect(() => {
    console.log("useEffect");
    if (isMember) {
      console.log("ismembertrue");
    }
  }, []);
  /*
  {
    isMember ? <Link to="/">로그아웃</Link> : <Link to="register">로그인</Link>;
  }
  */
  return (
    <CONTAINER>
      <Item />
      <Item>
        <IMG>로고 이미지가 들어갈 자리</IMG>
      </Item>
      <Item>
        <SEARCH>
          <INPUTBOX defaultValue="검색"></INPUTBOX>
          <SEARCHBTN>검색버튼</SEARCHBTN>
        </SEARCH>
        <HeaderR>
          <UL>
            <List>
              <a href="#">마이페이지</a>
            </List>
            <List>
              <span className="logInOut">로그인아웃</span>
            </List>
            <List>
              <a href="#">주문조회</a>
            </List>
            <List>
              <a href="#">장바구니</a>
            </List>
            <List>
              <Link to="/register">회원가입</Link>
            </List>
          </UL>
        </HeaderR>
      </Item>
    </CONTAINER>
  );
};

const CONTAINER = styled.div`
  display: flex;
  background-color: #fff;
  color: #000;
  min-height: 100px;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Item = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IMG = styled.div`
  width: 200px;
`;

const HeaderR = styled.div`
  padding-right: 25px;
  text-align: center;
`;
const SEARCH = styled.div`
  width: auto;
  background-color: #f3f3f3;
  display: flex;
  justify-content: flex-end;
  border-radius: 10px;
`;
const INPUTBOX = styled.input`
  width: auto;
  height: 34px;
  line-height: 34px;
  background-color: transparent;
`;
const SEARCHBTN = styled.div`
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
`;
const UL = styled.ul`
  list-style: none;
`;
const List = styled.li`
  width: auto;
  list-style: none;
  float: right;
  padding: 5px;
`;

export default Header;
