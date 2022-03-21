import React, { useState } from 'react';
import styled from "styled-components";

const Filter = () => {
  const [currentFilter, setCurrentFilter] = useState(0);

  const filterList = [
    {
      content: '최신순',
      type: 'date',
    },
    {
      content: '좋아요 많은순',
      type: 'like',
    },
    {
      content: '랜덤',
      type: 'random',
    }
  ]

  const selectMenuHandler = (idx) => {
    setCurrentFilter(idx)
  };

  return (
    <Container>
      <FilterList>
        {filterList.map((el, idx) => (
          <li
            key={idx}
            onClick={() => selectMenuHandler(idx)}
            className={`${el.type} ${currentFilter === idx ? 'focused' : ''}`}
          >
            {el.content}
          </li>
        ))}
      </FilterList>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px 0;
`
const FilterList = styled.ul`
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

export default Filter;