import { css } from '@emotion/react';
import React from 'react';
import { BiShareAlt } from 'react-icons/bi';
import { ShareData } from '../../types/request.d';

const ShareButton = ({ shareData }: { shareData: ShareData }) => {
	const link = location.href;
	const handleShareClick = React.useCallback(async () => {
		try {
			if (navigator.share) {
				await navigator.share({
					title: shareData.title,
                    text: shareData.text,
					url: location.href,
				});
			} else {
				await navigator.clipboard.writeText(link);
				alert('링크가 복사되었습니다.');
			}
		} catch (e) {
			console.log(e);
			alert('공유 중 오류가 발생했습니다. 다시 시도해주세요!');
		}
	}, []);

	const shareBtn = css`
		width: 37px;
		height: 37px;
		border-radius: 18.5px;
		background: linear-gradient(0deg, #e7e7e7 0%, #e7e7e7 100%), #fff;
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
