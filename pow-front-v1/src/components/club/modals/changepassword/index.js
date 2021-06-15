import React, { useState } from 'react';
import * as s from './Style';
import { changePw } from '../../../../axios/Axios';
import pow from '../../../img/pow.png';

const NewPw = ({setNewPwModal}) => {
    const [existring_password, setExistring_password] = useState();
    const [new_password, setNew_password] = useState();
    const [new_passwordCheck, setNew_passwordCheck] = useState();

    const onClickEnter = async() => {
        try {
            if(new_password !== new_passwordCheck) {
                alert("변경 비밀번호가 일치하지 않습니다")
            }
            else if(new_password === new_passwordCheck){
            await changePw(existring_password, new_password);
            alert("비밀번호가 변경되었습니다.");
            setNewPwModal(false);
            }
        } catch (error) {
            if(error.response.data.code === 'CLUB400-2'){
                alert("비밀번호를 다시 확인해주세요")
            }
        }
    }
    const onClickAway = () => {
        setNewPwModal(false);
    }

    return(
        <>
            <s.Modal onClick={onClickAway}/>
            <s.ModalCenter>
                <s.PwModal>
                    <s.Logo>
                        <img src={pow} alt=""></img>
                    </s.Logo>
                    <s.PwSpan>
                        <span>비밀번호 변경</span>
                    </s.PwSpan>
                    <s.PwInput>
                        <input
                            onChange={(event) => {
                                setExistring_password(event.target.value);
                            }}
                            value={existring_password}
                            className="ModalInput"
                            placeholder="현재 비밀번호를 입력해주세요"/>
                    </s.PwInput>
                    <s.NewPwInput>
                        <input
                            onChange={(event) => {
                                setNew_password(event.target.value);
                            }}
                            value={new_password}
                            className="ModalInput"
                            placeholder="변경할 비밀번호를 입력해주세요"/>
                        <input
                            onChange={(event) => {
                                setNew_passwordCheck(event.target.value);
                            }}
                            value={new_passwordCheck}
                            className="ModalInput"
                            placeholder="비밀번호 확인"/>
                    </s.NewPwInput>
                    <s.EnterBtn>
                        <button onClick={onClickEnter} className="LoginBtn" >ENTER</button>
                    </s.EnterBtn>
                </s.PwModal>
            </s.ModalCenter>
        </>
    )
}

export default NewPw;