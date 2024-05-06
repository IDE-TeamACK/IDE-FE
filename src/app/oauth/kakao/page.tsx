"use client";

import { useSearchParams } from "next/navigation";
import * as Entities from "@/entities";
import { useEffect } from "react";

export default function KakaoRedirect() {
  const params = useSearchParams();
  const code = params.get("code") ?? "";
  const loginMutation = Entities.Auth.useLoginMutation({
    provider: "kakao",
    code,
  });

  useEffect(() => {
    loginMutation.mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p className="flex items-center justify-center p-12">
        로그인 중 입니다...
      </p>
    </div>
  );
}
