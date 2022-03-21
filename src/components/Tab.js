import React, { useState } from 'react';
import styled from "styled-components";

const Tab = () => {

  return (
    <Container>
      <ViewTap>
        <li></li>
        <li></li>
      </ViewTap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px 0;
`
const ViewTap = styled.ul`
  display: flex;
  justify-content: center;
  li {
    padding: 6px 10px;
    line-height: 14px;
    font-size: 14px;
    color: #C4C4C4;
    font-weight: 400;
    cursor: pointer;
  }
  .focused {
    background: #7F78D2;
    color: white;
    border-radius: 12px;
  }
`

export default Tab;