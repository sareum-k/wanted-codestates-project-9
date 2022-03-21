import React, { useState } from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import Filter from '../components/Filter';
import Tab from '../components/Tab';

const Main = () => {

  return (
    <>
      <Header />
      <Button >리 뷰 등 록</Button>
      <Filter />
      <Tab />
    </>
  );
}

export default Main;