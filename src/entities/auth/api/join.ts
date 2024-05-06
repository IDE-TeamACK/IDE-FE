import * as Shared from "@/shared";
import type { DataUser, ExtraDetails } from "../types";

export default async function join(details: ExtraDetails) {
  const res = await Shared.api.fetch<DataUser>("/v1/auth/join", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(details),
  });

  return res;
}
