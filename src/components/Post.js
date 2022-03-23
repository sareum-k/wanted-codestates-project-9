import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { FaThumbsUp } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { ImStarFull } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { addToLike } from '../redux/actions';

const Post = ({ data, handleMovePage }) => {
  const { date, like, userId, image, rating, content, id } = data
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [selected, setSelected] = useState(false)
  const array = [0, 1, 2, 3, 4]

  const handleLike = (id) => {
    setSelected(!selected)
    dispatch(addToLike(id));
  }

  const handleClickedStar = (rating) => {
    let clickStates = [...clicked];
    for (let i = 0; i < rating; i++) {
      clickStates[i] = true;
    }
    setClicked(clickStates);
  };

  const handleShareUrl = () => {
    let dummy = document.createElement("input");
    dummy.value = window.location.href;

    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert('클립보드 복사 완료 🙌🏻'); //추후 가능하면 모달로 변경하기
  };

  useEffect(() => {
    handleClickedStar(rating)
  }, [])

  return (
    <>
      <Header onClick={() => handleMovePage(id)}>
        <Name>{userId}</Name>
        <Date>{date.substring(0, 10)}</Date>
      </Header>
      <Img src={image[0]} />
      <ContentBox>
        <IconBox>
          <LikeIcon onClick={() => handleLike(id)}>
            {selected ?
              <FaThumbsUp color="black"
                size="20"
              /> : <FaThumbsUp size="20" />
            }
            <span>{like}</span>
          </LikeIcon>
          <FiShare2 onClick={() => handleShareUrl()} size="24" />
        </IconBox>
        <RatingBox>
          {array.map((el, idx) => (
            <ImStarFull
              key={idx}
              className={clicked[el] && 'black'}
              size="18"
            />))}
        </RatingBox>
        <Content>{content}</Content>
      </ContentBox>
    </>
  );
}

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`
const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
`
const Date = styled.p`
  color: #C4C4C4;
  font-weight: 500;
`
const Img = styled.img`
  width: 100%;
  height: 470px;
`
const ContentBox = styled.div`
`
const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
`
const LikeIcon = styled.div`
  font-weight: 400;
  margin-right: 20px;
  font-size: 16px;
  & svg{
    cursor: pointer;
    margin-right: 10px;
    color: #C4C4C4;
  }
`
const RatingBox = styled.div`
  padding: 5px 15px;
  & svg {
    color: #C4C4C4;
  }
  .black {
    color: black;
  }
`
const Content = styled.p`
  height: auto;
  padding: 0px 15px;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 40px;
  margin-bottom: 0;
  line-height: 1.5;
  overflow: hidden;
`
export default Post;