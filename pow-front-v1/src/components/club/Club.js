import React, { useEffect, useState } from "react";
import * as S from "./Style";
import { useParams } from "react-router";
import { clubPage } from "../../axios/Axios";
import edit from "../img/edit.png";
import picture from "../img/picture.png";
import writing from "../img/writing.png";
import list from "../img/list.png";
import Header from "../header/Header";
import { ClubPage } from "../../axios/Axios";
import {
  BannerUpload,
  BannerDelete,
  ClubModifyModal,
  PictureUploadModal,
  PostModifyModal,
  PostModifyRemoveModal,
  PostUploadModal,
  ProfileDeleteModal,
  ProjectIntroModal,
} from "./modals/index";

const Club = () => {
  const [modalComponents, setModalComponents] = useState(null);
  const [name, setName] = useState("");
  const [profilePath, setProfilePath] = useState("");
  const [bannerPath, setBannerPath] = useState("");
  const [contents, setContents] = useState("");
  const [projectList, setProjectList] = useState([]);
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    clubPage(id)
      .then(async (res) => {
        await setData(res.data);
        setName(res.data.name);
        setProfilePath(res.data.profilePath);
        setBannerPath(res.data.bannerPath);
        setContents(res.data.contents);
        setProjectList(res.data.introduction);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onClickPictureModal = () => {
    setModalComponents(
      <PictureUploadModal selectModal={setModalComponents} clubId={id} />
    );
  };

  const onClickPostModifyRemoveModal = (e, projectId) => {
    e.stopPropagation();
    setModalComponents(
      <PostModifyRemoveModal
        clubId={id}
        projectId={projectId}
        selectModal={setModalComponents}
      />
    );
  };

  const onClickClubModifyModal = () => {
    setModalComponents(
      <ClubModifyModal clubId={id} closeModal={setModalComponents} />
    );
  };

  const onClickPostUploadModal = () => {
    setModalComponents(
      <PostUploadModal clubId={id} closeModal={setModalComponents} />
    );
  };

  const onClickProjectIntro = (projectId) => {
    setModalComponents(
      <ProjectIntroModal
        clubId={id}
        projectId={projectId}
        closeModal={setModalComponents}
      />
    );
  };

  const onClickBannerDeleteModal = () => {
    setModalComponents(
      <BannerDelete closeModal={setModalComponents} clubId={id} />
    );
  };

  const onClickProfileDeleteModal = () => {
    setModalComponents(
      <ProfileDeleteModal closeModal={setModalComponents} clubId={id} />
    );
  };

  return (
    <>
      <Header />
      {modalComponents}
      <header>
        <S.BannerImg>
          <S.WhiteBox />
          <S.LogoDiv>
            <img
              alt="프로필 사진"
              src={`${data ? data.profile_path : null}`}
              onClick={onClickProfileDeleteModal}
            />
          </S.LogoDiv>
          <img
            alt="베너 사진"
            src={`${data ? data.banner_path : null}`}
            onClick={onClickBannerDeleteModal}
          />
        </S.BannerImg>
      </header>
      <section style={{ backgroundColor: "#FCFCFC" }}>
        <S.MainContent>
          <S.LeftContent>
            <S.ClubIntroBox>
              <span>{name}</span>
              <S.ClubContent>{contents}</S.ClubContent>
            </S.ClubIntroBox>
          </S.LeftContent>
          <S.RightContent>
            <S.Upload>
              <S.PictureUpload onClick={onClickPictureModal}>
                <img alt="아이콘" src={picture}></img>
                <span>사진 업로드</span>
              </S.PictureUpload>
              <S.ClubFix onClick={onClickClubModifyModal}>
                <img alt="아이콘" src={edit}></img>
                <span>동아리 소개 수정</span>
              </S.ClubFix>
              <S.PostUpload onClick={onClickPostUploadModal}>
                <img alt="아이콘" src={writing}></img>
                <span>게시물 업로드</span>
              </S.PostUpload>
            </S.Upload>
            <S.Content>
              {projectList.map((project, i) => {
                return (
                  <S.Post
                    key={i}
                    onClick={() => onClickProjectIntro(project.id)}
                  >
                    <img
                      alt="더보기"
                      src={list}
                      onClick={(e) =>
                        onClickPostModifyRemoveModal(e, project.id)
                      }
                    ></img>
                    <S.PostDiv>
                      <p>작성일 : {project.created_at}</p>
                      {/*<p>수정일 : 2021-04-11</p>*/}
                    </S.PostDiv>
                    <S.Title>{project.title}</S.Title>
                  </S.Post>
                );
              })}
            </S.Content>
          </S.RightContent>
        </S.MainContent>
      </section>
    </>
  );
};

export default Club;
