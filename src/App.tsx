import { css } from '@emotion/react';
import './styles/commonStyle.css'
import NavBar from './components/common/NavBar';

function App() {
	const style = css`
		color: #ff8c00;
    font-size: 5rem;
    text-align: center;
	`;
	return (
		<div className="App">
			<div css={style} className='headerLayout'>arti-client</div>
			<NavBar/>
		</div>
	);
}

export default App;
