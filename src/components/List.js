import React from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import Post from "./Post";

const List = () => {
  const { data } = useSelector((state) => state.dataReducer)
  return (
    <ListBox>
      {data.map((data) => (
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