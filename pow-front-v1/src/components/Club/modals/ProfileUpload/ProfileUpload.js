import React from 'react';
import * as s from './style';

const ProfileUpload = () => {
  return(
    <>
      <s.WhiteScreen></s.WhiteScreen>
      <s.Modal>
        <s.Title>
          <p>프로필 사진 업로드</p>
        </s.Title>
        <s.FileInput>
          <s.FileBtn>파일 선택</s.FileBtn>
          <s.FilePath>Submit.jpg</s.FilePath>
        </s.FileInput>
        <s.UploadBtn>업로드 하기</s.UploadBtn>
      </s.Modal>
    </>
  )
}

export default ProfileUpload;