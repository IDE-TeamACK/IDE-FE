/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

"use client";

import Image from "next/image";
import React from "react";
import { FileType } from "../model/types";

type Props = {
  fileData: FileType;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
  activeItem: string;
};

const fileNameBarClasses =
  "flex items-center cursor-pointer hover:bg-black justify-start w-full p-2 ";

export default function File({ fileData, setActiveItem, activeItem }: Props) {
  return (
    <div
      key={fileData.language}
      onClick={() => {
        setActiveItem(fileData.name);
      }}
      className={
        fileData.name === activeItem
          ? `${fileNameBarClasses}bg-black`
          : fileNameBarClasses
      }
    >
      <Image alt="code" width={20} height={20} src={fileData.iconName} />
      <p className="mx-4">{fileData.name}</p>
    </div>
  );
}
