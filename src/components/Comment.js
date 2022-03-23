import React from 'react';
import styled from "styled-components";

const Comment = ({ data }) => {
  const { userId, date, content } = data
  return (
    <Container>
      <InfoBox>
        <UserName>{userId}</UserName>
        <Date>{date}</Date>
      </InfoBox>
      <Content>{content}</Content>
    </Container>
  );
}

const Container = styled.div`
  width: 380px;
  height: auto;
  background-color: rgba( 211, 211, 211, 0.3 );
  padding: 20px 10px;
  margin: 10px auto;
  border-radius: 10px;
`
const InfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
const UserName = styled.p`
  margin: 0;
  margin-right: 10px;
  font-weight: 700;
`
const Date = styled.p`
  margin: 0;
  font-size: 14px;
`
const Content = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
`

export default Comment;