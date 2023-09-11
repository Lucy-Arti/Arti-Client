import '@styles/commonStyle.css';
import NavBar from '@common/NavBar';
import { css } from '@emotion/react';

const Home = () => {
    const spaceBetween = css`
        justify-content: space-between;
    `
	return (
		<>
			<div className="headerLayout">
                <div css={spaceBetween} className='headerComponent'>
                    <img src='/img/blackLogo.svg'/>
                    <img src='/img/search.svg'/>
                </div>
            </div>
			<NavBar />
			<div>Home</div>
		</>
	);
};

export default Home;
