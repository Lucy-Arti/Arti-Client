'use client'
import { CanInvite } from '@/apis/mypage';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';
import ModalCannotInvite from '../common/ModalCannotInvite';

const MypageExternalContent = (props:{setModalOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
	const route = useRouter();
	const [canAccess, setCanAccess] = useState<boolean>(false);

	useEffect(() => {
		canInvite();
	}, [])

	const onClickToExternel = (url: string) => {
		if (typeof window !== 'undefined') {
			window.open(url, '_blank');
		}
	};

	const canInvite = async() => {
		const response = await CanInvite();
		if(response === false){
			console.log("api 연결 실패");
		} else {
			console.log('response 받음')
			setCanAccess(response.data);
			console.log(response.data);
		}
	}

	const onClickInviteEvent = () => {
		console.log(canAccess);
		if(canAccess === false){
			route.push('/mypage/invitedby');
		} else {
			props.setModalOpen(true);
			setTimeout(() => {
                props.setModalOpen(false);
            }, 1000);
		}
	}

	return (
		<ColumnSort>
			<MenuList onClick={() => onClickToExternel('https://lucy-team.notion.site/EVENT-b3be6ffb61b847e1a418e4bb9d6cb121')}>
				<div className="text">이벤트</div>
				<FiChevronRight size="26px" />
			</MenuList>
			<MenuList onClick={() => onClickToExternel('https://lucy-team.notion.site/FAQ-6c7d647e96374577be3f817adbde5637')}>
				<div className="text">자주 묻는 질문</div>
				<FiChevronRight size="26px" />
			</MenuList>
			<MenuList onClick={() => onClickToExternel('https://arti.channel.io/home')}>
				<div className="text">1:1문의</div>
				<FiChevronRight size="26px" />
			</MenuList>
			<MenuList onClick={onClickInviteEvent}>
				<div className="text">초대코드 입력</div>
				<FiChevronRight size="26px" />
			</MenuList>
			<MenuList className="last" onClick={() => onClickToExternel('https://arti.channel.io/home')}>
				<div className="text">디자이너 참여 신청</div>
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
		margin-bottom: 12rem;
	}
	&:hover {
		cursor: pointer;
	}
`;
