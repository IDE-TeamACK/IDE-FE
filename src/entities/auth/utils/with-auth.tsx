"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAccessToken from "../model/use-access-token";

export default function withAuth(Component: React.FunctionComponent) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function ProtectedComponent(props: any) {
    const { accessToken } = useAccessToken();
    const router = useRouter();

    useEffect(() => {
      if (!accessToken) {
        router.push("/login");
      }
    }, [accessToken, router]);

    if (!accessToken) {
      return null;
    }
    return React.createElement(Component, props, null);
  };
}
