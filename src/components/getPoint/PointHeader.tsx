'use client';
import React from 'react';
import styled from 'styled-components';
import '@styles/commonStyle.css';
import { FiChevronLeft } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';

type PointHeaderPropsType = {
	text: string;
	backTo: string;
};

const PointHeader = (props: PointHeaderPropsType) => {
	const router = useRouter();
	return (
		<div className="headerLayout">
			<BackgroundWrapper>
				<HeaderComponent className="headerComponent">
					<StyledFiChevronLeft size="26px" onClick={() => router.push(`${props.backTo}`)} />
					<div style={{ fontSize: '2rem', fontWeight: 600 }}>{props.text}</div>
					<EmptyDiv className="emptyDiv"></EmptyDiv>
				</HeaderComponent>
			</BackgroundWrapper>
		</div>
	);
};

export default PointHeader;

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
