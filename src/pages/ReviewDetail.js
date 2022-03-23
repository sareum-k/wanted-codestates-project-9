import React from 'react';
import styled from "styled-components";
import { BiArrowBack, BiX } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Post from "../components/Post";
import Comment from "../components/Comment";
import { useNavigate } from "react-router-dom";

const ReviewDetail = () => {
  const { data } = useSelector(state => state.dataReducer);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/');
  const currentId = path[path.length - 1];

  const matchedData = data.find(item => item.id == currentId); // 추후 고민해서 수정하기

  return (
    <Container>
      <Header>
        <BiArrowBack size="25" onClick={() => navigate('/')} />
        <MenuTitle>리뷰 상세보기</MenuTitle>
        <BiX size="30" onClick={() => navigate('/')} />
      </Header>
      <Post data={matchedData} />
      {matchedData.comments.map((data, idx) => (
        <Comment
          key={idx}
          data={data}
        />
      ))}
      <InpuutBox>
        <CommentBox>
          <InputText placeholder="내용을 입력해주세요:)" />
          <SubmitBtn>게시</SubmitBtn>
        </CommentBox>
      </InpuutBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
`
const Header = styled.div`
  height: 65px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #C4C4C4;
  svg{
    cursor: pointer;
  }
`
const MenuTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`
const InpuutBox = styled.div`
  padding-bottom: 20px;
`
const CommentBox = styled.div`
  width: 370px;
  height: 40px;
  margin: 20px 20px;
  border-radius: 20px;
  border: 1px solid #FA163F;
`
const InputText = styled.input`
  width: 85%;
  height: 84%;
  margin-left: 10px;
  outline: none;
  border: none;
  margin-top: 3px;
`
const SubmitBtn = styled.button`
  margin-right: 5px;
  background-color: #ffffff;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #FA163F;
`

export default ReviewDetail;