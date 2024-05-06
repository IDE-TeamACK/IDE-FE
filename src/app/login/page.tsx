"use client";

import * as Features from "@/features";
import * as Entities from "@/entities";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { accessToken } = Entities.Auth.useAccessToken();
  const [isLoggedIn] = useState(!!accessToken);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);

  return (
    <div>
      <p className="flex items-center justify-center p-12">
        로그인 페이지 입니다
      </p>
      <Features.LoginForm />
    </div>
  );
}
