export const Redirect_uri = 'https://arti-fashion.site/kakaologin';

export const KAKAO_KEY = process.env.NEXT_PUBLIC_API_KEY;

// export const Redirect_uri = 'http://localhost:3000/kakaologin';

export const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${Redirect_uri}&response_type=code`;
