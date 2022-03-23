import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import { BiArrowBack, BiX } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ImStarFull } from "react-icons/im";
import Button from "../components/Button";

const ReviewRegister = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]); //이미지 화면 띄우기
  const [image, setImage] = useState([]); //이미지 파일 server 보내기
  const fileInput = useRef(null);
  const [clicked, setClicked] = useState([false, false, false, false, false]); // 별점 기본값 설정
  const array = [0, 1, 2, 3, 4]   // 더미 배열을 통해 항상 별이 총 5개가 나오도록 한다.

  const fileHandle = (e) => {
    setImage(e.target.files[0]);
    setFiles(URL.createObjectURL(e.target.files[0]))
  };

  const uploadImage = (e) => {
    e.preventDefault();
    fileInput.current.click();
  };


  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  const submitReview = () => {
    let score = clicked.filter(Boolean).length;
  };

  useEffect(() => {
    submitReview();
  }, [clicked]); //컨디마 컨디업

  // if (
  //   title === '' ||
  //   text === '' ||
  //   category === '' ||
  //   image.length === 0 ||
  //   content_id.length === 0
  // ) {
  //   dispatch(setMessageModal(true, '빈 항목이 있습니다.'));
  //   return;
  // }

  return (
    <Container>
      <Header>
        <BiArrowBack size="25" onClick={() => navigate('/')} />
        <MenuTitle>리뷰 작성하기</MenuTitle>
        <BiX size="30" onClick={() => navigate('/')} />
      </Header>
      <ContentBox>
        <Category>제목</Category>
        <TitleInput type="text" placeholder="리뷰 제목을 입력해주세요." />
      </ContentBox>
      <ContentBox>
        <Category>내용</Category>
        <ContentInput type="text" placeholder="내용을 입력해주세요." />
      </ContentBox>
      <ContentBox>
        <ImageBtnBox>
          <Category>이미지 업로드</Category>
          <ImageBtn onClick={uploadImage}>이미지 추가</ImageBtn>
        </ImageBtnBox>
        <ImageBox>
          <Image
            src={files}
          />
          <ImageInput
            type="file"
            accept='image/*'
            onChange={fileHandle}
            ref={fileInput}
          />
        </ImageBox>
      </ContentBox>
      <ContentBox>
        <Category>상품 별점</Category>
        <RatingBox>
          {array.map((el, idx) => (
            <ImStarFull
              key={idx}
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'black'}
              size="35"
            />))}
        </RatingBox>
      </ContentBox>
      <ContentBox>
        <Button>등록하기</Button>
      </ContentBox>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
`
const Header = styled.div`
  height: 65px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #C4C4C4;
  svg{
    cursor: pointer;
  }
`
const MenuTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`
const ContentBox = styled.div`
  padding: 30px 30px 10px 30px;
`
const Category = styled.h3`
  margin: 0;
  margin-bottom: 7px;
`
const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 5px;
  border: 1px solid black;
`
const ContentInput = styled.input`
  width: 100%;
  height: 100px;
  padding-left: 5px;
  border: 1px solid black;
`
const ImageBtnBox = styled.div`
  display: flex;
  align-items: center;
`
const ImageBtn = styled.button`
  width: 90px;
  height: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: none;
  background-color: #000000;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
`
const ImageBox = styled.div`
  width: 100%;
  height: 230px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`
const ImageInput = styled.input`
  display:none;
`
const RatingBox = styled.div`
  width: 50%;
  margin: 0 auto;
  & svg {
    color: #C4C4C4;
    cursor: pointer;
  }
  :hover svg {
    color: black;
  }
  & svg:hover ~ svg {
    color: #C4C4C4;
  }
  .black {
    color: black;
  }
  .gray {
    color: #C4C4C4;
  }
`

export default ReviewRegister;