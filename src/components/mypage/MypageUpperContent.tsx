'use client'
import { userEmailAtom, userNameAtom } from '@/app/recoilContextProvider';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const MypageUpperContent = () => {
	const userName = useRecoilValue(userNameAtom);
	const userEmail = useRecoilValue(userEmailAtom);
	const randomNum = Math.random() * 4;
	const randomNumFloor = Math.floor(randomNum);
	const route = useRouter();

	return (
		<ColumnSort>
			<ProfileWrapper>
				<img width="20%" src={`/img/myProfile-${randomNumFloor}.png`}/>
				<UserBox>
					<div className='username'>
						{userName}
					</div>
					<div className='useremail'>
						{userEmail}
					</div>
				</UserBox>
			</ProfileWrapper>
			<BtnWrapper>
				<BtnStyle
					className="start"
					onClick={() => {
						route.push('/mypage/voted');
					}}
				>
					<img src="/img/mypageVoteBtn.png" />
					<div className='text'>
						투표한 옷
					</div>
				</BtnStyle>
				<BtnStyle
					onClick={() => {
						route.push('/mypage/recent');
					}}
				>
					<img src="/img/mypageRecentBtn.png" />
					<div className='text'>
						최근 본 옷
					</div>
				</BtnStyle>
				<BtnStyle
					className="last"
					onClick={() => {
						route.push('/mypage/marked');
					}}
				>
					<img src="/img/mypageHeart.png" />
					<div className='text'>
						저장한 옷
					</div>
				</BtnStyle>
			</BtnWrapper>
		</ColumnSort>
	);
};

export default MypageUpperContent;


const ColumnSort = styled.div`
	display: flex;
	width: 90%;
	flex-direction: column;
`;
const ProfileWrapper = styled.div`
	display: flex;
	margin: 2.5rem 0 4rem 1rem;
	align-items: center;
`;
const UserBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 2rem;
	& > .username {
		font-size: 3rem;
		font-weight: bolder;
		margin-bottom: 1rem;
	}
	& > .useremail {
		font-size: 1.5rem;
	}
`
const BtnWrapper = styled.div`
	display: flex;
	filter: drop-shadow(0 0 0.3rem #9e9e9e);
	background-color: white;
	border-radius: 15px;
	justify-content: center;
	align-items: center;
	img {
		width: 30%;
	}
`;
const BtnStyle = styled.div`
	display: flex;
	flex-basis: 33%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background-color: white; */
	gap: 1.5rem;
	padding: 3rem 0 3rem 0;
	&:hover {
		cursor: pointer;
	}
	&.start {
		border-right: 2px solid #f3f3f3;
	}
	&.last {
		border-left: 2px solid #f3f3f3;
	}
	& > .text{
		font-size: 1.5rem;
		font-weight: 600;
	}
`