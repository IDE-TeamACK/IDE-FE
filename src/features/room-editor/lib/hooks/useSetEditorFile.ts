import { DUMMY_DATA } from "@/features/room-sidebar/lib/utils/constant";
import { useState } from "react";

export const useSetEditorFile = (activeFile: string) => {
  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("console.log('Hello world')");

  const getCodeByFileName = (): string => {
    let code = "";
    switch (activeFile) {
      case "index.html":
        code = html;
        break;

      case "style.css":
        code = css;
        break;

      case "script.js":
        code = js;
        break;

      default:
        break;
    }
    return code;
  };

  const changeCodeByFileName = (value: string) => {
    switch (activeFile) {
      case "index.html":
        setHtml(value);
        break;

      case "style.css":
        setCss(value);

        break;

      case "script.js":
        setJs(value);

        break;

      default:
        break;
    }
  };

  const getLanguage = () => {
    return DUMMY_DATA.find(data => data.name === activeFile)!.language;
  };

  return {
    files: { html, css, js },
    getLanguage,
    changeCodeByFileName,
    getCodeByFileName,
  };
};
