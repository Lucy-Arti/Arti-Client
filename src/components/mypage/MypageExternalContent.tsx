import { FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';

const MypageExternalContent = () => {
	const onClickToExternel = (url: string) => {
		if (typeof window !== 'undefined') {
			window.open(url, '_blank');
		}
	};

	return (
		<ColumnSort>
			{/* <div css={menulist}>
            <div className="text">이벤트</div>
            <FiChevronRight size="26px" />
        </div>
        <div css={menulist}>
            <div className="text">자주 묻는 질문</div>
            <FiChevronRight size="26px" />
        </div> */}
			<MenuList onClick={() => onClickToExternel('https://arti.channel.io/')}>
				<div className="text">1:1문의</div>
				<FiChevronRight size="26px" />
			</MenuList>
			<MenuList className="last" onClick={() => onClickToExternel('https://forms.gle/rK4TQXT6uSXzDCrL8')}>
				<div className="text">입점 신청</div>
				<FiChevronRight size="26px" />
			</MenuList>
		</ColumnSort>
	);
};

export default MypageExternalContent;

const ColumnSort = styled.div`
	display: flex;
	width: 90%;
	flex-direction: column;
	margin-top: 2rem;
`;
const MenuList = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 1rem 2rem 1rem;
	border-bottom: 2px solid #f5f5f5;
	& > .text {
		font-size: 1.8rem;
	}
	&.last {
		border-bottom: none;
	}
	&:hover {
		cursor: pointer;
	}
`;
