import * as Shared from "@/shared";

export default async function logout() {
  const res = await Shared.api.fetch("/v1/auth/logout", {
    method: "GET",
    credentials: "include",
  });

  return res;
}
