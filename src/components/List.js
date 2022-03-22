import React from 'react';
import styled from "styled-components";
import Dummy from "../data/dummyData.json";
import Post from "./Post";

const List = () => {
  return (
    <ListBox>
      {Dummy.map((data) => (
        <Post
          key={data.id}
          data={data}
        />
      ))}
    </ListBox>
  );
}

const ListBox = styled.div`
  width: 100%;
  background-color: #fff;
`

export default List;