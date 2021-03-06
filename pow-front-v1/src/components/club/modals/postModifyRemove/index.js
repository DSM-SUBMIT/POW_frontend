import React from "react";
import * as S from "./Style";
import WhiteScreen from "../common/WhiteScreen";
import * as SVG from "../common/SvgCollection";
import { PostModifyModal, PostDelete } from "../index";

const PostModifyRemoveModal = ({ selectModal, clubId, projectId }) => {
  const onClickGreyBox = () => {
    selectModal(null);
  };

  const onClickPostModify = () => {
    selectModal(
      <PostModifyModal
        clubId={clubId}
        projectId={projectId}
        closeModal={selectModal}
      />
    );
  };

  const onClickPostDelete = () => {
    selectModal(
      <PostDelete
        clubId={clubId}
        projectId={projectId}
        closeModal={selectModal}
      />
    );
  };

  return (
    <>
      <WhiteScreen onClick={onClickGreyBox} />
      <S.PmrContent>
        <S.Title>
          <p>게시글 수정 / 삭제</p>
        </S.Title>
        <S.Button onClick={onClickPostModify}>
          <SVG.ModifySvg />
          게시글 수정
        </S.Button>
        <S.Button onClick={onClickPostDelete}>
          <SVG.RemoveSvg />
          게시글 삭제
        </S.Button>
      </S.PmrContent>
    </>
  );
};

export default PostModifyRemoveModal;
