import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Header from '../common/Header';
import { useRecoilValue } from 'recoil';
import { userNameAtom } from '@/app/recoilContextProvider';
import { PostInviteCode } from '@/apis/mypage';
import { useRouter } from 'next/navigation';

const MypageInviteCode = () => {
    const userName = useRecoilValue(userNameAtom);
    const [inputText, setInputText] = useState('');
    const [btnActive, setBtnActive] = useState(false);
    const [errorOccur, setErrorOccur] = useState(false);
    const [errorCode, setErrorCode] = useState('');
    const [goNext, setGoNext] = useState(false);
    // const [goNext, setGoNext] = useState(true); //테스트용

    const route = useRouter();

    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    useEffect(() => {
        setErrorOccur(false);
        if(inputText === '' || inputText.length!==6){
            setBtnActive(false);
        } else {
            if(inputText === errorCode){
                setErrorOccur(true);
                setBtnActive(false);
            } else {
                setBtnActive(true);
            }
        }
    }, [inputText]);

    const onClickConfirm = async() => {
        const response = await PostInviteCode(inputText);
        if(response === false){
            setErrorOccur(true);
            setErrorCode(inputText);
            setBtnActive(false);
        } else {
            setGoNext(true);
        }
    }

  return (
        goNext === true ? 
        <FlexColumn className='wrapper'>
            <ContentWrapper className='confirm-wrapper'>
                <ConfirmImageWrapper>
                    <div className='img-box'>
                        <img src="/img/check-circle2.png" />
                    </div>
                    <ConfirmTextWrapper>
                        <div className='large-text'>1500 포인트가 지급되었어요!</div>
                        <div className='small-text'>친구에게도 함께 지급되었어요.</div>
                    </ConfirmTextWrapper>
                </ConfirmImageWrapper>
                <ConfirmBtn className='active' onClick={() => route.push('/')}>홈으로</ConfirmBtn>
            </ContentWrapper>
        </FlexColumn>
        :
        <>
         <FlexColumn>
            <Header where="초대코드 입력" />
        </FlexColumn>
        <FlexColumn className='wrapper'>
                <ContentWrapper>
                    <TextInputAllOne>
                        <TextWrapper>
                            <div>{userName} 님을 초대해주신 분의</div>
                            <div>초대코드를 입력해주세요!</div>
                        </TextWrapper>
                        <InputWrapper>
                            <div className='info'>초대코드</div>
                            <input value={inputText} onChange={(e)=>onChangeInput(e)} />
                            <WarningText>
                                {
                                    btnActive ? <></> : <div>초대코드는 6자로 이루어져 있어요. 오타를 확인해주세요.</div>
                                }
                                { 
                                    errorOccur ? <div>잘못된 코드예요</div> : <></>
                                }
                            </WarningText>
                        </InputWrapper>
                    </TextInputAllOne>
                    <ConfirmBtn className={btnActive?'active' : ''} onClick={onClickConfirm}>입력완료</ConfirmBtn>
                </ContentWrapper>
            </FlexColumn>
            </>
    )
}

export default MypageInviteCode

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    &.wrapper{
        width: 100%;
        justify-content: center;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    justify-content: space-between;
`

const TextInputAllOne = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    font-weight: 500;
    margin-top: 6rem;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > .info{
        font-size: 1.6rem;
        font-weight: 600;
        color: #A0A0A0;
    }
    & > input{
        height: 5.6rem;
        font-size: 2rem;
        border: 1px solid rgba(240, 240, 240, 1);
        border-radius: 0.8rem;
        padding-left: 1rem;
    }
`

const WarningText = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    flex-direction: column;
    font-size: 1.3rem;
    color: rgba(107, 218, 1, 1);
    gap: 1rem;
`

const ConfirmBtn = styled.div`
    display: flex;
    width: 80%;
    height: 6rem;
    justify-content: center;
    align-items: center;
    color: rgba(135, 135, 135, 1);
    background-color: rgba(240, 240, 240, 1);
    border-radius: 0.8rem;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 5rem;
    position: absolute;
    bottom: 0%;
    left: 10%;
    @media (min-width: 576px) {
		width: 576px;
	}
    &.active{
        color: black;
        background-color: rgba(165, 232, 101, 1);
        &:hover{
            cursor: pointer;
        }
    }
`

const ConfirmImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20rem;
    & > .img{
        display: flex;
        justify-content: center;
    }
`

const ConfirmTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    & > .large-text{
        font-size: 2.75rem;
        font-weight: 600;
        color: black;
    }
    & > .small-text{
        font-size: 2rem;
        font-weight: 400;
        color: rgba(168, 168, 168, 1);
    }
`