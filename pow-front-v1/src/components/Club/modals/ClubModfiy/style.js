import styled from "styled-components";

export const CmContent = styled.div`
  width: 644px;
  height: 608px;
  background: #ffffff;
  border-radius: 23px;
  border: 1px solid #707070;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`;

export const Title = styled.div`
  border-bottom: 1px solid #707070;
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  p {
    font-family: NanumSquare_ac;
    font-size: 20px;
  }
`;

export const WriteBox = styled.div`
  width: 488px;
  height: 394px;
  border: 1px solid #707070;
  border-radius: 23px;
  margin-top: 30px;
  color: #ffffff;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const InputContent = styled.textarea`
  width: 474px;
  height: 380px;
  border: none;
  border-radius: 23px;
  padding: 7px;
  ::placeholder {
    text-align: center;
  }
  :focus {
    outline: none;
  }
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: red;
  }
  ::-webkit-scrollbar-track {
    background-color: #7662c6;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f9f9f9;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #7662c6;
    border-radius: 30px;
  }
`;

export const UploadButton = styled.button`
  width: 130px;
  height: 52px;
  background: #f4bea1;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  margin-top: 30px;
`;
