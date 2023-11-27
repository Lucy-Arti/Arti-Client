'use client';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

const FooterSection = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
	margin-top: 1.5rem;
`;

const ContentSection = styled.div`
	width: 100%;
	background-color: white;
	border-top: 1px #f0f0f0 solid;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.main-span {
		margin-bottom: 2rem;
		margin-top: 2.25rem;
	}
	.insta {
		margin-top: 2rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	a {
		text-decoration: none;
		color: #a0a0a0;
	}
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
			<ContentSection as={TextStyle1}>
				<span className="main-span">
					<span>
						<a
							href="https://lucy-team.notion.site/ARTI-8e9a8831e7884dfebce979122fc16f4a?pvs=4"
							target="_blank"
							rel="noopener noreferrer"
						>
							팀원 모집
						</a>
					</span>
					&nbsp;|&nbsp;
					<span>
						<a
							href="https://lucy-team.notion.site/601b103dd2b8469eb379f99e01c4db5d?pvs=4"
							target="_blank"
							rel="noopener noreferrer"
						>
							이용약관
						</a>
					</span>
					&nbsp;|&nbsp;
					<span>
						<a
							href="https://www.notion.so/lucy-team/22a7f0f39c4744f2a190c06d58d7cf33?pvs=4"
							target="_blank"
							rel="noopener noreferrer"
						>
							개인정보처리방침
						</a>
					</span>
					&nbsp;|&nbsp;
					<span>
						<a
							href="https://lucy-team.notion.site/effe1e9693844d6aa46ad7f9b4c32b4e?pvs=4"
							target="_blank"
							rel="noopener noreferrer"
						>
							사업자정보확인
						</a>
					</span>
				</span>
				<div>COMPANY : 루시 &nbsp; CEO : 이상민</div>
				<div>BUSINESS LICENSE : 213-59-00773</div>
				<div>ADDRESS : 서울특별시 동작구 흑석로 84, 310관 206-2호</div>
				<span className="insta">
					<FaInstagram size="1rem" />
					<a
						href="https://instagram.com/arti_fashion_design?igshid=NGVhN2U2NjQ0Yg=="
						target="_blank"
						rel="noopener noreferrer"
					>
						arti_fashion_design
					</a>
				</span>
			</ContentSection>
		</FooterSection>
	);
};

export default Footer;
