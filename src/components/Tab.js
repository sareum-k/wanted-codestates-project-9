import React, { useState } from 'react';
import styled from "styled-components";
import { BsGrid3X3, BsViewList } from 'react-icons/bs';
import Grid from "../components/Grid";
import List from "../components/List";

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const TapList = [
    {
      icon: <BsGrid3X3 size="20" />,
    },
    {
      icon: <BsViewList size="20" />,
    }
  ]

  const selectMenuHandler = (idx) => {
    setCurrentTab(idx)
  };

  return (
    <Container>
      <ViewTap>
        {TapList.map((el, idx) => (
          <li
            key={idx}
            onClick={() => selectMenuHandler(idx)}
            className={`${currentTab === idx ? 'focused' : ''}`}
          >{el.icon}</li>
        ))}
      </ViewTap>
      {currentTab === 0 ? <Grid /> : <List />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`
const ViewTap = styled.ul`
  display: flex;
  justify-content: center;
  li {
    color: #C4C4C4;
    font-weight: 500;
    cursor: pointer;
    size: 20px;
    width: 50%;
    text-align: center;
    padding: 15px 0;
    border-bottom: 3px solid #C4C4C4;
    svg{
      vertical-align: middle;
    }
  }
  .focused {
    color: black;
    border-bottom: 3px solid black;
  }
`

export default Tab;