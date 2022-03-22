import React from 'react';
import styled from "styled-components";
import Dummy from "../data/dummyData.json";

const Grid = () => {

  return (
    <Container>
      <GridBox>
        {Dummy.map((data) => (
          <li key={data.id}>
            <img src={data.image[0]} />
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
    }
  }
`

export default Grid;