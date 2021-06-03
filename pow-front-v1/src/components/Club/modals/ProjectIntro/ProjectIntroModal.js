import React from "react";
import * as S from "../ProjectIntro/style";
import WhiteScreen from "../common/WhiteScreen";
import IntroduceHeader from "./IntroduceHeader";

const ProjectlntroModal = (props) => {
  const onClickProjectIntroModal = () => {
    props.setProjectIntroModal(false);
  };
  return (
    <modal>
      <WhiteScreen onClick={onClickProjectIntroModal} />
      <S.IntroContent>
        <IntroduceHeader />
        <S.IntroduceBox>
          <p>.</p>
        </S.IntroduceBox>
      </S.IntroContent>
    </modal>
  );
};

export default ProjectlntroModal;