export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_FE_URL}${process.env.NEXT_PUBLIC_KAKAO_OAUTH_REDIRECT_URL}`;