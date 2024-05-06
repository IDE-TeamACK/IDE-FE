"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";
import { v4 } from "uuid";
import { useConsoleFeed } from "../lib/hooks/useConsoleFeed";

export default function ConsoleSection() {
  const { consoleFeed, resetConsoleFeed } = useConsoleFeed();

  return (
    <>
      <div className=" flex items-center bg-black pl-8">
        <p>Console</p>
        <FaTrash
          onClick={() => {
            resetConsoleFeed();
          }}
          className="ml-5 cursor-pointer"
        />
      </div>
      <div className="h-full px-3 pt-3 text-black">
        {consoleFeed.map(feed => (
          <>
            <p
              key={v4()}
              className={feed.type === "error" ? "text-red-600" : "text-white"}
            >
              {feed.msg}
            </p>
            <hr />
          </>
        ))}
      </div>
    </>
  );
}
