import { useState } from 'react';
import '@styles/commonStyle.css';
import { kakaoURL } from './loginInfo';
import styled from 'styled-components';

const Login = ({ where }: { where: string }) => {
	const [open, setOpen] = useState(false);
	const click = () => {
		setOpen(true);
	};
	const handleLogin = () => {
		if (typeof window !== 'undefined') {
			window.location.href = kakaoURL;
		}
	};

	let content: string = '';

	if (where === 'vote') {
		content = '로그인하여\n투표에 참여해보세요!';
	} else if (where === 'mypage') {
		content = '아티와 함께하여\n새로운 스타일과 브랜드를 경험해 보세요!';
	}

	return (
		<>
			<LoginSection>
				<ContentCss>
					{content.split('\n').map((line, index) => (
						<span key={index}>
							{line}
							<br />
						</span>
					))}
				</ContentCss>
				<img className="loginBanner" src={'/img/loginBanner.png'}></img>
				<img src={'/img/kakao.png'} className="kakao" onClick={handleLogin} />
			</LoginSection>
		</>
	);
};

export default Login;

const LoginSection = styled.div`
	margin-top: 5rem;
	width: 100%;
	height: 45rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.loginBanner {
		width: 30rem;
		height: 17rem;
	}
	.kakao {
		border-radius: 5px;
		width: 75%;
	}
`;

const ContentCss = styled.div`
	font-size: 2.2rem;
	font-weight: 900;
	text-align: center;
	line-height: 22px;
	letter-spacing: -0.408px;
	height: 6rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 2rem;
`;
