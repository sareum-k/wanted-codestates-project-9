import React from 'react';
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <LogoBox src="https://i.balaan.io/mobile/img/icon/ico_logo.png" />
    </Container>
  );
}

const Container = styled.div`
  height: 50px;
  text-align: center;
  margin-bottom: 20px;
`
const LogoBox = styled.img`
  width: 170px;
  margin-top: 10px;
`

export default Header;