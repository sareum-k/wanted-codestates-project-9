import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { FaThumbsUp } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { ImStarFull } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { addToLike } from '../redux/actions';

const Post = ({ data }) => {
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

  useEffect(() => {
    handleClickedStar(rating)
  }, [])

  return (
    <>
      <Header>
        <Name>{userId}</Name>
        <Date>{date.substring(0, 9)}</Date>
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
          <FiShare2 size="24" />
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
  padding: 0px 15px;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 40px;
  border-bottom: 1px solid #C4C4C4;
  margin-bottom: 0;
`
export default Post;