import * as Shared from "@/shared";
import type { DataAccessToken } from "../types";

export default async function reissueToken() {
  const res = await Shared.api.fetch<DataAccessToken>("/v1/auth/reissue", {
    method: "GET",
    credentials: "include",
  });

  return res;
}
