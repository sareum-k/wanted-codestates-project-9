import React from 'react';
import styled from "styled-components";

const Button = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
}

const Container = styled.div`
  width: 370px;
  height: 35px;
  background-color: #000000;
  border-radius: 5px;
  text-align: center;
  margin: 0 auto;
  padding-top: 8px;
  box-sizing: border-box;
  cursor: pointer;
  :hover{
    background-color: #ffffff;
    border: 1px solid #000000;
    color: #000000;
  }
`
const Text = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  :hover{
    color: #000000;
  }
`

export default Button;