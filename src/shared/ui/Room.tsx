"use client";

import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "../../../liveblocks.config";

export default function Room({ children }: { children: ReactNode }) {
  return (
    <RoomProvider
      id="myRoom"
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback="Loading…">
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
