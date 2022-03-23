import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/register')}>
      <Text>{children}</Text>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 35px;
  background-color: #000000;
  border-radius: 5px;
  text-align: center;
  margin: 0 auto;
  padding-top: 8px;
  box-sizing: border-box;
  cursor: pointer;
`
const Text = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`

export default Button;