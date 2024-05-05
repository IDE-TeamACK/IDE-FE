"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import logout from "../api/logout";
import { STORAGE_KEY_OF_TOKEN } from "../constants";

export default function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const fetchLogout = useCallback(() => {
    queryClient.clear();
    localStorage.removeItem(STORAGE_KEY_OF_TOKEN);
    logout().then(() => router.refresh());
  }, [queryClient, router]);

  return { logout: fetchLogout };
}
