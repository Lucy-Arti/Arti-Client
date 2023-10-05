const { VITE_API_KEY } = import.meta.env;

export const Redirect_uri = 'https://arti-fashion.site/kakaologin';
export const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_API_KEY}&redirect_uri=${Redirect_uri}&response_type=code`;
