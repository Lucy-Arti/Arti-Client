'use client'
import styled from 'styled-components';

const FooterSection = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
`;

const ContentSection = styled.div`
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

const TextStyle1 = styled.div`
	color: #a0a0a0;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.875rem;
`;

const BoldTextStyle = styled(TextStyle1)`
	font-weight: 500;
	margin-bottom: 2rem;
`;

const TextStyle2 = styled(TextStyle1)`
	color: #666;
`;

const Footer: React.FC = () => {
	return (
		<FooterSection>
			<ContentSection>
				<BoldTextStyle>Contact</BoldTextStyle>
				<TextStyle2>문의 : lucyteam0806@gmail.com</TextStyle2>
				<TextStyle1>카카오톡 채널 : 루시 LUCY</TextStyle1>
			</ContentSection>
			<ContentSection as={TextStyle1}>
				<div>COMPANY : 루시 &nbsp; CEO : 이상민</div>
				<div>BUSINESS LICENSE : 213-59-00773</div>
				<div>ADDRESS : 서울특별시 동작구 흑석로 84, 310관 206-2호</div>
			</ContentSection>
		</FooterSection>
	);
};

export default Footer;
