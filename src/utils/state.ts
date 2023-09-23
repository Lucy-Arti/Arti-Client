// recoil 값 저장하는 파일
import { atom } from 'recoil';

export const isLoginAtom = atom({
	key: 'isLogin',
	default: false,
});
