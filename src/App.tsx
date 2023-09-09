import { css } from '@emotion/react';
import './App.css';

function App() {
	const style = css`
		color: green;
    font-size: 40px;
    text-align: center;
	`;
	return (
		<div className="App">
			<div css={style}>arti-client</div>
		</div>
	);
}

export default App;
