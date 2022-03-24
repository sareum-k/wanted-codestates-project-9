import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { sortByDate, sortByReview, sortByRandom, getFilter } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const [currentFilter, setCurrentFilter] = useState(0);

  const filterList = [
    {
      content: '최신순',
      type: 'date',
    },
    {
      content: '리뷰 많은순',
      type: 'like',
    },
    {
      content: '랜덤',
      type: 'random',
    }
  ]

  const HandleMenu = (idx) => {
    if (idx === 0) {
      dispatch(sortByDate());
      dispatch(getFilter(idx))
    } else if (idx === 1) {
      dispatch(sortByReview())
      dispatch(getFilter(idx))
    } else if (idx === 2) {
      dispatch(sortByRandom())
      dispatch(getFilter(idx))
    }
    setCurrentFilter(idx)
  };

  useEffect(() => {
    dispatch(sortByDate());
  }, [])

  return (
    <Container>
      <FilterList>
        {filterList.map((el, idx) => (
          <li
            key={idx}
            onClick={() => HandleMenu(idx)}
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
  height: 70px;
  padding: 27px 0 20px 0;
`
const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  li {
    padding: 6px 12px;
    line-height: 14px;
    font-size: 14px;
    color: #C4C4C4;
    font-weight: 350;
    cursor: pointer;
  }
  .focused {
    background: #FA163F;
    color: white;
    border-radius: 15px;
  }
`

export default Filter;