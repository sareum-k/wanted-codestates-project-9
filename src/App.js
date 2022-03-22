import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './redux/store/store';
import { Provider } from 'react-redux';
import styled from "styled-components";
import Main from "./pages/Main";
import ReviewDetail from "./pages/ReviewDetail";
import ReviewRegister from "./pages/ReviewRegister";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainContainer>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/detail" element={<ReviewDetail />} />
            <Route exact path="/register" element={<ReviewRegister />} />
          </Routes>
        </MainContainer>
      </Provider>
    </BrowserRouter>
  );
}

const MainContainer = styled.main`
  width: 414px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
`;

export default App;
