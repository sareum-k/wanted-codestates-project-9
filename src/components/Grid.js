import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Grid = () => {
  const navigate = useNavigate();
  const { data, filterIdx } = useSelector((state) => state.dataReducer)
  const targetRef = useRef(null);
  const observerRef = React.useRef();
  const [reviews, setReviews] = useState(data.slice(0, 15));
  const [reviewsPage, setReviewsPage] = useState(1);
  // const [sortOption, setSortOption] = useState(filterIdx);

  const handleMovePage = (id) => {
    navigate(`/detail/${id}`)
  }

  // useEffect(() => {
  //   observerRef.current = new IntersectionObserver(intersectionObserver);
  //   targetRef.current && observerRef.current.observe(targetRef.current);
  // }, [reviews]);

  // const getData = () => {
  //   if (data.length >= reviewsPage * 15) {
  //     const additionalData = data.slice(reviewsPage * 15, (reviewsPage + 1) * 15);
  //     setReviewsPage((reviewsPage) => reviewsPage + 1);
  //     setReviews([...reviews, ...additionalData]);
  //   }
  // };

  // const intersectionObserver = (entries, io) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       io.unobserve(entry.target);
  //       getData();
  //     }
  //   });
  // };

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Container>
      <GridBox>
        {data.map((data, idx) => (
          <li ref={targetRef} key={idx}>
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