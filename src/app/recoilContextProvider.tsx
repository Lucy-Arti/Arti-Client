'use client';

import { RecoilRoot, atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isLoginAtom = atom({
	key: 'isLogin',
	default: false,
	effects_UNSTABLE: [persistAtom],
});

export const userNameAtom = atom({
	key: 'userName',
	default: '',
	effects_UNSTABLE: [persistAtom],
});

export const userEmailAtom = atom({
	key: 'userEmail',
	default: '',
	effects_UNSTABLE: [persistAtom],
});

export const userRoleAtom = atom({
	key: 'userRole',
	default: '',
	effects_UNSTABLE: [persistAtom],
});

export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
	return <RecoilRoot>{children}</RecoilRoot>;
}
