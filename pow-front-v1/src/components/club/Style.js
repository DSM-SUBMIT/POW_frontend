import styled from "styled-components";

export const BannerImg = styled.div`
  position: relative;
  width: 100%;
  height: 245px;
  border-bottom: 10px solid;
  border-image: linear-gradient(
    to right,
    #b096cd,
    #ad94cd,
    #8e7cd0,
    #625bd4,
    #ae95cd
  );
  border-image-slice: 1;
  img {
    width: 1375px;
    height: 100%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Logo = styled.div`
  position: relative;
`;

export const LogoDiv = styled.div`
  z-index: 2;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  position: absolute;
  --b: 15px;
  display: inline-block;
  bottom: -120px;
  margin-left: 400px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    left: 48%;
    top: 48%;
    transform: translate(-50%, -50%);
  }

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 200px;
    height: 200px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(
      --c,
      linear-gradient(
        to bottom,
        #c2a8d1,
        #9378c6,
        #6a5fcf,
        #5353dc,
        #c89299,
        #f1a882
      )
    );
    padding: var(--b);
    border-radius: 50%;
    background-color: white;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

export const WhiteBox = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
  position: absolute;
  left: 48%;
  top: 48%;
  transform: translate(-50%, -50%);
`;

export const MainContent = styled.div`
  width: 1280px;
  background-color: white;
  margin: auto;
`;

export const LeftContent = styled.div`
  margin-top: 188px;
  float: left;
`;

export const ClubIntroBox = styled.div`
  width: 300px;
  height: 133px;
  border: 3px solid #aeadad;
  border-radius: 27px;
  margin-left: 60px;
  box-shadow: 1px 1px 5px #aeadad;

  span {
    position: relative;
    top: -23%;
    margin-left: 44px;
    font-size: 38px;
    background-color: white;
    color: #707070;
  }
`;

export const ClubContent = styled.div`
  width: 280px;
  height: 66px;
  border: 1px solid #aeadad;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const Writer = styled.div`
  float: right;
  font-size: 20px;
  color: #8d8d8d;
  margin-top: 30px;
  margin-right: 17px;
`;

export const RightContent = styled.div`
  position: relative;
`;

export const Upload = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 65px;
  padding-top: 50px;

  div {
    
    display: flex;
    align-items: center;
    margin: 0px 10px 0px 10px;
    height: 50px;
    background-color: #f4f4f4;
    border-radius: 17px;
    justify-content: center;
    font-size: 20px;
    color: #676767;
    cursor: pointer;

    :hover {
      background-color: #cecece;
    }

    img {
      width: 30px;
      margin-right: 10px;
    }

    :first-child {
      margin-left: 45px;
    }
  }
`;

export const PictureUpload = styled.div`
  width: 230px;
`;

export const ClubFix = styled.div`
  width: 258px;
`;

export const PostUpload = styled.div`
  width: 238px;
`;

export const Content = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 449px;
  width: 830px;
  margin: 0;
  margin-left: 436px;

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9f91d6;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
  }
`;

export const Post = styled.div`
  width: 777px;
  height: 150px;
  border: 3px solid #cbcbcb;
  box-shadow: 1px 1px 5px #cbcbcb;
  border-radius: 27px;
  margin-bottom: 30px;
  cursor: pointer;
  img {
    float: right;
    margin-right: 25px;
    z-index: 3;
    cursor: pointer;
  }
`;

export const PostDiv = styled.div`
  display: flex;
  margin-top: 20px;
  height: 0;
  p {
    margin: 0;
    margin-right: 18px;
    font-size: 20px;
    color: #8d8d8d;

    :first-child {
      margin-left: 40px;
    }
  }
`;

export const Title = styled.div`
  margin-top: 45px;
  margin-left: 50px;
  font-size: 40px;
`;
