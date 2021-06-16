import React from "react";
import * as S from "./Style";
import WhiteScreen from "../common/WhiteScreen";
import { DeletePost } from "../../../../axios/Axios";

const PostDelete = ({ closeModal, clubId, projectId }) => {
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViX2lkIjoxfQ.HFXowaGXnoryNVa_SbW2TtkF8KzA9ZJDfX6OnXpR9_o`;
  const onClickPostDelete = () => {
    closeModal(null);
  };

  const onClickCancel = () => {
    closeModal(null);
  };

  return (
    <>
      <WhiteScreen onClick={onClickPostDelete} />
      <S.DelContent>
        <S.Title>
          <p>게시글을 삭제합니다</p>
        </S.Title>
        <S.CheckButton
          onClick={(e) => {
            DeletePost(token, clubId, projectId);
          }}
        >
          확인
        </S.CheckButton>
        <S.NoButton onClick={onClickCancel}>취소</S.NoButton>
      </S.DelContent>
    </>
  );
};

export default PostDelete;
