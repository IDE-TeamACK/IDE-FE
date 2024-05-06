"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import authKeys from "./auth-keys";
import { LoginInfo } from "../types";
import login from "../api/login";

export default function useLoginMutation(
  info: LoginInfo & { redirectTo?: string },
) {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationKey: authKeys.login(info),
    mutationFn: () => login(info),
    onSuccess: ({ data }) => {
      queryClient.setQueryData<typeof data.token>(
        authKeys.accessToken(),
        data.token,
      );
      router.replace(info.redirectTo ?? "/");
    },
    onError: () => {
      queryClient.clear();
      router.replace("/login");
    },
  });
}
