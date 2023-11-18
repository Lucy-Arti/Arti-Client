'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import '@styles/commonStyle.css';
import { FiChevronLeft } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';
import CancelModal from './CancelModal';

type DeliveryHeaderPropsType = {
	text: string;
};

const DeliveryHeader = (props: DeliveryHeaderPropsType) => {
	const router = useRouter();
	const handleButtonClick = () => {
		const result = window.confirm('구매를 완료하지 못했어요.\n 이대로 종료할까요?');
		if (result) {
			router.push('/mypage/shop');
		} else {
		}
	};
	return (
		<>
			<div className="headerLayout">
				<BackgroundWrapper>
					<HeaderComponent className="headerComponent">
						<StyledFiChevronLeft size="26px" onClick={handleButtonClick} />
						<div style={{ fontSize: '2rem', fontWeight: 600 }}>{props.text}</div>
						<EmptyDiv className="emptyDiv"></EmptyDiv>
					</HeaderComponent>
				</BackgroundWrapper>
			</div>
		</>
	);
};

export default DeliveryHeader;

const HeaderComponent = styled.div`
	width: 95%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const BackgroundWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledFiChevronLeft = styled(FiChevronLeft)`
	cursor: pointer;
`;

const EmptyDiv = styled.div`
	width: 20px;
`;
