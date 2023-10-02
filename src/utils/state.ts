// recoil 값 저장하는 파일
import { atom } from 'recoil';
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
