'use client'
import { CanVoteAtom, VoteEditAtom } from '@/app/recoilContextProvider'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

const VoteTab = () => {
  const [canVote, setCanVote] = useRecoilState(CanVoteAtom);
  const [voteText, setVoteText] = useRecoilState(VoteEditAtom);

  const [changedUpperText, setChangedUpperText] = useState<string>(voteText.bigger);
  const [changedLowerText, setChangedLowerText] = useState<string>(voteText.smaller);

  const toggleClick = (position:string) => {
    if(position === 'left'){
      if(!canVote){
        setCanVote((val) => !val);
      }
    } else {
      if(canVote){
        setCanVote((val) => !val);
      }
    }
  }

  const onClickUpper = () => {
    setVoteText({
      bigger: changedUpperText,
      smaller: voteText.smaller,
    })
  }
  const onClickLower = () => {
    setVoteText({
      bigger: voteText.bigger,
      smaller: changedLowerText,
    })
  }

  return (
    <Wrapper>
      <div className='title'>투표 열기 및 멘트 수정</div>
      <EditSection>
        <OpenVote>
          <div className='title'>투표 열기</div>
          <VoteToggle $isOn={canVote}>
            <div className='left' onClick={() => toggleClick('left')}>ON</div>
            <div className='right' onClick={() => toggleClick('right')}>OFF</div>
          </VoteToggle>
        </OpenVote>
        <EditComment>
          <div className='title'>멘트 수정</div>
          <ChangeVoteCmtWrapper>
            <div className='exist'>
              <div>미리보기</div>
              <BannerSection>
                <BannerImg src="/img/voteBanner.png" />
                <TextSection>
                  <div>
                    <Text1>
                      {
                      changedUpperText.includes('\n') ? changedUpperText.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                      ))
                      :
                      <div>{changedUpperText}</div>
                      }
                    </Text1>
                    {canVote ? <VoteBtn>투표하러 가기</VoteBtn> : <></>}
                  </div>
                  <FontSize>
                    {
                      changedLowerText.includes('\n') ? changedLowerText.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                      ))
                      :
                      <div>{changedLowerText}</div>
                      }
                  </FontSize>
                </TextSection>
              </BannerSection>
            </div>
            <div className='edit-tab'>
              <div className='title'>1번 수정</div>
              <InputWrapper>
                <InputBox value={changedUpperText} 
                onChange={(e) => setChangedUpperText(e.target.value)} />
                <ChangeBtn $canChange={changedUpperText!==voteText.bigger ? true:false} onClick={() => onClickUpper()}>수정</ChangeBtn>
              </InputWrapper>
              <div className='title-2'>2번 수정</div>
              <InputWrapper>
                <InputBox value={changedLowerText} onChange={(e) => setChangedLowerText(e.target.value)} />
                <ChangeBtn $canChange={changedLowerText!==voteText.smaller ? true:false} onClick={() => onClickLower()}>수정</ChangeBtn>
              </InputWrapper>
              </div>
          </ChangeVoteCmtWrapper>
        </EditComment>
      </EditSection>
    </Wrapper>
  )
}

export default VoteTab

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border-radius: 10px;
  & > .title{
    width: 100%;
    font-size: 2.5rem;
    font-weight: 600;
    padding-bottom: 1rem;
  }
`;

const EditSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 2rem;
`

const OpenVote = styled.div`
  display: flex;
  width: 96%;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  & > .title{
    font-size: 2rem;
    font-weight: 600;
  }
`

const VoteToggle = styled.div<{$isOn:boolean}>`
  display: flex;
  width: 10rem;
  height: 2.5rem;
  border-radius: 20px;
  border: 1px solid #C9C9C9;
  & > div{
    display: flex;
    width: 5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    &:hover{
      cursor: pointer;
    }
  }
  & > .left{
    background-color: ${props => props.$isOn ? '#A5E865' : '#666666'};
    border-radius: 20px 0px 0px 20px;
  }
  & > .right{
    background-color: ${props => props.$isOn ? '#666666' : '#D9D9D9'};
    border-radius: 0px 20px 20px 0px;
  }
`

const EditComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid #D9D9D9;
  padding-top: 2rem;
  & > .title{
    font-size: 2rem;
    font-weight: 600;
  }
`

const ChangeVoteCmtWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
  & > .exist{
    display: flex;
    flex-direction: column;
    width: 50%;
    font-size: 1.5rem;
    font-weight: 600;
  }
  & > .edit-tab{
    display: flex;
    flex-direction: column;
    width: 45%;
    & > .title{
      font-size: 1.5rem;
      font-weight: 600;
    }
    & > .title-2{
      margin-top: 3rem;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`

const BannerSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	aspect-ratio: 1 / 0.64;
	margin-top: 1rem;
	position: relative;
	overflow: -moz-hidden-unscrollable;
  border: 1px solid black;
`;

const BannerImg = styled.img`
	position: absolute;
	width: 100%;
	border-radius: 13px;
`;

const TextSection = styled.div`
	position: absolute;
	width: 88%;
	height: 80%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
`;

const Text1 = styled.div`
	font-size: 2.8rem;
	font-weight: 600;
	margin-top: 20px;
`;

const FontSize = styled.div`
	font-weight: 600;
	font-size: 1.5rem;
`;

const InputWrapper = styled.div`
    display: flex;
    width: 90%;
    border-radius: 6px;
    border : 1px solid #BDBDBD;
    padding-top: 1rem;
    padding-bottom: 1rem;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    margin-top: 1rem;
`

const InputBox = styled.textarea`
    display: flex;
    width: 80%;
    font-size: 1.5rem;
    color: rgba(56, 56, 56, 1);
    font-weight: 500;
    border: none;
    background-color: none;
    outline: none;
`

const ChangeBtn = styled.div<{$canChange:boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 3rem;
  font-weight: 600;
  width: 10%;
  border-radius: 10px;
  background-color: ${props => props.$canChange ? '#A5E865' : '#666666'};
`

const VoteBtn = styled.div`
	z-index: 1;
	width: fit-content;
	border-radius: 30px;
	background: #555;
	color: white;
	text-align: center;
	cursor: pointer;
	font-size: 2rem;
	padding: 10px 20px;
	margin-top: 2.2rem;
	@media (max-width: 420px) {
		font-size: 1.5rem;
		padding: 8px 17px;
	}
`;