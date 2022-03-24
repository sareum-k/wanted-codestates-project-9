import React from 'react';
import Header from "../components/Header";
import Button from "../components/Button";
import Tab from '../components/Tab';
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <Header />
      <Box>
        <Button>리 뷰 등 록</Button>
      </Box>
      <Tab />
    </>
  );
}

const Box = styled.div`
  padding: 0 15px;
`

export default Main;