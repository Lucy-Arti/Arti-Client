import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const footerSection = css`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
`;

const contentSection = css`
	width: 100%;
	height: 11.75rem;
	background-color: white;
	border-top: 1px #f0f0f0 solid;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const textStyle1 = css`
	color: #a0a0a0;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.875rem;
`;

const Footer = () => {
	const navigate = useNavigate();

	return (
		<div css={footerSection}>
			<div css={contentSection}>
				<div
					css={[
						textStyle1,
						css`
							font-weight: 500;
							margin-bottom: 2rem;
						`,
					]}
				>
					Contact
				</div>
				<div
					css={[
						textStyle1,
						css`
							color: #666;
						`,
					]}
				>
					문의 : lucyteam0806@gmail.com
				</div>
				<div css={textStyle1}>카카오톡 채널 : 루시 LUCY</div>
			</div>
			<div css={[contentSection, textStyle1]}>
				<div>COMPANY : 루시 &nbsp; CEO : 이상민</div>
				<div> BUSINESS LICENSE : 213-59-00773</div>
				<div>ADDRESS : 서울특별시 동작구 흑석로 84, 310관 206-2호</div>
			</div>
			<Btn
				onClick={() => {
					navigate('/signup');
				}}
			>
				회원가입!
			</Btn>
		</div>
	);
};

export default Footer;

const Btn = styled.button`
	width: 80px;
	height: 45px;
	background-color: white;
	color: #6bd46b;
	border: 3px solid #6bda01;
	border-radius: 10px;
	display: center;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	margin-left: 1.9rem;
	cursor: pointer;
	&:hover {
		background-color: #6bd46b;
		color: white;
	}
`;
