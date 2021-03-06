import styled from "styled-components";

export const PmrContent = styled.div`
  width: 620px;
  height: 200px;
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
    font-seize: 20px;
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 59px;
  background: #f4f4f4;
  border-radius: 17px;
  border: none;
  margin: 20px;
  margin-top: 28px;
  font-size: 19px;
  line-height: 49px;
  font-family: NanumSquare_ac;
  cursor: pointer;
  svg {
    vertical-align: middle;
    margin-right: 9px;
    margin-bottom: 4px;
  }
  :hover {
    background-color: #cecece;
  }
`;
