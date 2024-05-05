import * as Shared from "@/shared";
import type { DataUser, LoginInfo } from "../types";

export default async function login(info: LoginInfo) {
  const res = await Shared.api.fetch<DataUser>("/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(info),
  });

  return res;
}
