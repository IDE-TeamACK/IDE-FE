import type { LoginInfo, ExtraDetails } from "../types";

const authKeys = {
  all: ["auth"] as const,
  accessToken: () => [...authKeys.all, "accessToken"] as const,
  login: (info: LoginInfo) => [...authKeys.all, "login", info] as const,
  join: (details: ExtraDetails) => [...authKeys.all, "join", details] as const,
  reissue: () => [...authKeys.all, "reissue"],
  userNameDuplicate: (name: string) =>
    [...authKeys.all, "username-duplicate", { name }] as const,
};

export default authKeys;
