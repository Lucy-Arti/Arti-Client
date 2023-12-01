'use client'
import { userEmailAtom, userNameAtom, userPhotoAtom } from '@/app/recoilContextProvider';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IoSettingsOutline } from 'react-icons/io5';
import { useEffect } from 'react';

const MypageProfile = () => {
    const userName = useRecoilValue(userNameAtom);
    const userProfile = useRecoilValue(userPhotoAtom);
    const route = useRouter();
    
    useEffect(() => {
        
    })

  return (
    <ProfileWrapper>
        <UserBox>
            <UserImage>
                <img src={userProfile}/>
            </UserImage>
            <div className='username'>
                {userName}
            </div>
        </UserBox>
        <IoSettingsOutline className="setting-icon" size="3rem" color="#B5B5BC" onClick={() => route.push('/mypage/settings')} />
    </ProfileWrapper>
  )
}

export default MypageProfile

const ProfileWrapper = styled.div`
	display: flex;
	margin: 2.5rem 0 3rem 1rem;
	align-items: center;
    justify-content: space-between;
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

const UserImage = styled.div`
    display: flex;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    overflow: hidden;
    border-radius: 60px;
    & > img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`