/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

"use client";

import * as Shared from "@/shared";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import toast from "react-hot-toast";

type Props<T> = {
  navData: T[];
  renderItem: (data: T) => ReactNode;
};

export default function Sidebar<T>({ navData, renderItem }: Props<T>) {
  const router = useRouter();
  // const roomId = router.query.roomid;
  const copyRoomId = () => {
    try {
      // await navigator.clipboard.writeText(roomId as string);
      toast.success("클립보드에 복사되었어요");
    } catch (err) {
      toast.error("다시 시도해주세요");
    }
  };
  const leaveRoom = () => {
    router.push("/");
  };

  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="  flex-col ">
        <div className="flex h-32 w-full items-center px-4 ">
          <h1
            className="cursor-pointer bg-gradient-to-br from-textpink to-textblue bg-clip-text text-4xl font-bold text-transparent"
            onClick={() => {
              router.push("/");
            }}
          >
            악
          </h1>
        </div>
        <hr />
        <div className="my-4  w-full flex-col ">
          {navData.map(data => renderItem(data))}
        </div>
        <h3 className="mx-3 mb-2 text-3xl font-semibold">연결된 유저</h3>
      </div>
      <div className="mx-3">
        <Shared.UI.Button
          text="초대박 아이디 복사"
          onClickHandler={copyRoomId}
        />
        <Shared.UI.Button text="나가기" onClickHandler={leaveRoom} />
      </div>
    </div>
  );
}
