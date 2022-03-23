import React, { useRef } from 'react';
import styled from "styled-components";
import { BiArrowBack, BiX } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Post from "../components/Post";
import Comment from "../components/Comment";
import { useNavigate } from "react-router-dom";
import { addToComment } from '../redux/actions';

const ReviewDetail = () => {
  const { data } = useSelector(state => state.dataReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split('/');
  const currentId = path[path.length - 1];
  const inputRef = useRef();

  const matchedData = data.find(item => item.id == currentId); // 추후 고민해서 수정하기

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    let value = inputRef.current.value
    const nowDate = new Date().getTime();
    const date = timeForToday(nowDate)
    console.log(date) // 날짜가 이상해....

    if (!value) {
      alert('내용을 작성해주세요!')
      return;
    }

    const newComment = {
      userId: 'testId',
      date: date,
      content: value
    }
    dispatch(addToComment({ id: matchedData.id, newComment }));
    inputRef.current.value = '';
  }

  const timeForToday = (time) => {
    const today = new Date();
    const timeValue = new Date(time);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );

    if (betweenTime <= 1) {
      return `방금 작성`;
    }
    if (betweenTime < 60) {
      return `${betweenTime}분 전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 전`;
    }
  };

  return (
    <Container>
      <Header>
        <BiArrowBack size="25" onClick={() => navigate('/')} />
        <MenuTitle>리뷰 상세보기</MenuTitle>
        <BiX size="30" onClick={() => navigate('/')} />
      </Header>
      <Post data={matchedData} />
      {matchedData.comments.length > 0 &&
        matchedData.comments.map((data, idx) => (
          <Comment
            key={idx}
            data={data}
          />
        ))}
      <InpuutBox>
        <CommentBox>
          <InputText
            type="text"
            onKeyPress={onKeyPress}
            ref={inputRef}
            placeholder="내용을 입력해주세요:)"
          />
          <SubmitBtn onClick={handleSubmit}>
            게시
          </SubmitBtn>
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