import React from 'react';
import Header from "../components/Header";
import Button from "../components/Button";
import Filter from '../components/Filter';
import Tab from '../components/Tab';
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Button>리 뷰 등 록</Button>
      <Filter />
      <Tab />
    </>
  );
}

export default Main;