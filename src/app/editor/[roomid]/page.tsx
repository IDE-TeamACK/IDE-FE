/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

"use client";

import Head from "next/head";
import React, { useEffect, useState } from "react";
import * as Features from "@/features";
import * as Entities from "@/entities";
import * as Shared from "@/shared";
import { DUMMY_DATA } from "@/features/room-sidebar/lib/utils/constant";
import { useSetEditorFile } from "@/features/room-editor/lib/hooks/useSetEditorFile";
import { useSetLivePreview } from "@/entities/live-preview/lib/hooks/useSetLivePreview";

export default function EditorContainer() {
  const [activeFile, setActiveFile] = useState("index.html");
  const { files, changeCodeByFileName, getCodeByFileName, getLanguage } =
    useSetEditorFile(activeFile);
  const { changeCode, srcDoc } = useSetLivePreview(files);

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeCode();
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex bg-bgdark px-2 text-white">
      <Head>
        <title>Editor | Code Online</title>
      </Head>
      <Features.RoomSidebar.UI
        navData={DUMMY_DATA}
        renderItem={data => (
          <Entities.File
            fileData={data}
            setActiveItem={setActiveFile}
            activeItem={activeFile}
          />
        )}
      />
      <div className="grid flex-1 grid-cols-editor ">
        <Shared.UI.Room>
          <Features.RoomEditor.UI
            onClickFunc={() => {
              changeCode();
            }}
            onChange={value => {
              changeCodeByFileName(value as string);
            }}
            code={getCodeByFileName()}
            language={getLanguage()}
          />
        </Shared.UI.Room>

        <div className="grid grid-rows-[65vh_225px]">
          <Entities.LivePreview srcDoc={srcDoc} />
          <div className="bg-bgdark">
            <Features.ConsoleSection.UI />
          </div>
        </div>
      </div>
    </div>
  );
}
