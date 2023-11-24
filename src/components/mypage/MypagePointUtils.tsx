import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const MypagePointUtils = () => {
	const router = useRouter();

	return (
		<Wrapper>
			<NoticeCurrentPoint>
				<div className="notice">포인트</div>
				<div className="current-point">360p</div>
			</NoticeCurrentPoint>
			<PointBtnWrapper>
				<div className="btn" onClick={()=>{router.push('mypage/point')}}>포인트 얻기</div>
				<div className="btn" onClick={()=>{router.push('mypage/shop')}}>포인트 상점</div>
			</PointBtnWrapper>
		</Wrapper>
	);
};

export default MypagePointUtils;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgba(246, 246, 246, 0.6);
	width: 100%;
	margin-bottom: 2rem;
	gap: 2rem;
`;

const NoticeCurrentPoint = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: center;
	margin-left: 3rem;
	margin-top: 3rem;
	& > .notice {
		color: rgba(122, 122, 122, 1);
		font-size: 2rem;
		font-weight: 300;
	}
	& > .current-point {
		color: black;
		font-size: 2rem;
		font-weight: 400;
	}
`;

const PointBtnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 3rem;
	gap: 2rem;
	& > .btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 43%;
		height: 4rem;
		background-color: rgba(107, 218, 1, 0.6);
		font-size: 1.8rem;
		border-radius: 5px;
		&:hover {
			cursor: pointer;
		}
	}
`;
