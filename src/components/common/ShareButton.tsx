import { css } from '@emotion/react';
import React from 'react';
import { BiShareAlt } from 'react-icons/bi';

const ShareButton = () => {
	const link = location.href;
	const handleShareClick = React.useCallback(async () => {
		try {
			if (navigator.share) {
				await navigator.share({
					url: 'https://arti-fashion.site/',
				});
			} else {
				await navigator.clipboard.writeText(link);
				alert('링크가 복사되었습니다.');
			}
		} catch (e) {
			if (typeof e === 'object' && e instanceof Error) {
				if (e.name === 'AbortError') {
					// AbortError는 사용자가 공유 창을 닫은 경우에 발생합니다.
					console.log('사용자가 공유 창을 닫았습니다.');
				}
			} else {
				// 다른 오류 처리
				alert('지원하지 않는 브라우저입니다.');
			}
		}
	}, []);

	const shareBtn = css`
		width: 37px;
		height: 37px;
		border-radius: 18.5px;
		background-color: #ADADAD;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	`;

	return (
		<div css={shareBtn} onClick={handleShareClick}>
			<BiShareAlt size="22px" />
		</div>
	);
};

export default ShareButton;
