import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import ReviewDetail from "./pages/ReviewDetail";
import ReviewRegister from "./pages/ReviewRegister";

const App = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/detail" element={<ReviewDetail />} />
          <Route exact path="/register" element={<ReviewRegister />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

const MainContainer = styled.main``;

export default App;
