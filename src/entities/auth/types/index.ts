export type Provider = "kakao" | "naver" | "google";

export type LoginInfo = {
  provider: Provider;
  code: string;
};

export type ExtraDetails = LoginInfo & {
  nickName: string;
  birthDate: number;
};
