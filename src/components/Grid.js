import React from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Grid = () => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.dataReducer)
  console.log(data)
  const handleMovePage = (id) => {
    navigate(`/detail/${id}`)
  }

  return (
    <Container>
      <GridBox>
        {data.map((data) => (
          <li key={data.id}>
            <img src={data.image[0]} onClick={() => handleMovePage(data.id)} />
          </li>
        ))}
      </GridBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`
const GridBox = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  li{
    aspect-ratio: 1 / 1;
    overflow: hidden;
    img{
      width: 137px;
      height: 137px;
    }
  }
`

export default Grid;