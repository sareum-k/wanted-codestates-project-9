import React from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import Post from "./Post";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { data } = useSelector((state) => state.dataReducer)
  const navigate = useNavigate();

  const handleMovePage = (id) => {
    navigate(`/detail/${id}`)
  }

  return (
    <ListBox>
      {data.map((data) => (
        <Post
          key={data.id}
          data={data}
          handleMovePage={handleMovePage}
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