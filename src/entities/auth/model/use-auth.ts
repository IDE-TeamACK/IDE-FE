"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import authKeys from "./auth-keys";
import { STORAGE_KEY_OF_TOKEN } from "../constants";

export default function useAuth() {
  const queryClient = useQueryClient();

  const { data } = useQuery<string>({
    queryKey: authKeys.accessToken(),
  });
  const setToken = (token: string) => {
    queryClient.setQueryData(authKeys.accessToken(), token);
  };
  useEffect(() => {
    if (data) {
      localStorage.setItem(STORAGE_KEY_OF_TOKEN, data);
    }
  }, [data]);

  return { accessToken: data, setToken };
}
