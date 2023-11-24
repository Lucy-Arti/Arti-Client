'use client'
import { userEmailAtom, userNameAtom } from '@/app/recoilContextProvider';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IoSettingsOutline } from 'react-icons/io5';

const MypageProfile = () => {
    const userName = useRecoilValue(userNameAtom);
	const randomNum = Math.random() * 4;
	const randomNumFloor = Math.floor(randomNum);
    const route = useRouter();
  return (
    <ProfileWrapper>
        <UserBox>
        <img width="13%" src={`/img/myProfile-${randomNumFloor}.png`}/>
            <div className='username'>
                {userName}
            </div>
        </UserBox>
        <IoSettingsOutline className="setting-icon" size="13%" color="#B5B5BC" onClick={() => route.push('/mypage/settings')} />
    </ProfileWrapper>
  )
}

export default MypageProfile

const ProfileWrapper = styled.div`
	display: flex;
	margin: 2.5rem 0 3rem 1rem;
	align-items: center;
    & > .setting-icon{
        &:hover{
            cursor: pointer;
        }
    }
`;
const UserBox = styled.div`
	display: flex;
	gap: 2rem;
	align-items: center;
	& > .username {
		font-size: 3rem;
		font-weight: bolder;
	}
`