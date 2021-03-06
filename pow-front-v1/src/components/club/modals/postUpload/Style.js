import styled from "styled-components";
import DatePicker from "react-datepicker";

export const UpContent = styled.div`
  width: 908px;
  height: 700px;
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
  width: 280px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  p {
    font-family: NanumSquare_ac;
    font-size: 20px;
    margin-top: 27px;
    color: #8d8d8d;
  }
`;

export const UploadHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
`;

export const InputText = styled.input`
  width: 393px;
  height: 56px;
  background-color: #f4f4f4;
  border-radius: 17px;
  border: none;
  margin-right: 49px;
  outline: none;
  text-align: center;
  ::placeholder {
    font-size: 18px;
    color: #8d8d8d;
  }
`;

export const DayBox = styled.div`
  width: 393px;
  height: 46px;
  background-color: #f4f4f4;
  border-radius: 17px;
  border: none;
  padding-top: 14px;
`;

export const DayLable = styled.label`
  margin-left: 4px;
`;

export const SelectDate = styled(DatePicker)`
  height: 18px;
  width: 80px;
  padding: 6px 12px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #e5e5e5;
  outline: none;
  cursor: pointer;
`;

export const WriteBox = styled.div`
  width: 804px;
  height: 404px;
  border: 1px solid #707070;
  border-radius: 23px;
  color: #8d8d8d;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 7px;
  margin-top: 23px;
`;

export const InputContent = styled.textarea`
  width: 780px;
  height: 390px;
  border-radius: 23px;
  border: none;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-family: NanumSquare_ac;
  ::placeholder {
    text-align: center;
  }
  :focus {
    outline: none;
  }
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: red;
  }
  ::-webkit-scrollbar-track {
    background-color: #7662c6;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 10px;
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
  width: 140px;
  height: 55px;
  background: #f4bea1;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  margin-top: 30px;
  font-size: 17px;
  cursor: pointer;
  :hover {
    background-color: #f29969;
  }
`;
