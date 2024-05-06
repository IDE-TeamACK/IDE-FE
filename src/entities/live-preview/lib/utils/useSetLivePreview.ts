import { useCallback, useState } from "react";

export const useSetLivePreview = (files: {
  html: string;
  js: string;
  css: string;
}) => {
  const [srcDoc, setSrcDoc] = useState("");

  const changeCode = useCallback(() => {
    setSrcDoc(`
    <html>
      <style>
      ${files.css}</style>
      <body>${files.html}</body>
      <script>
      const originalLog = console.log;
      console.log = (...args) => {
        
        parent.window.postMessage({ type: 'log', args: args }, '*')
        originalLog(...args)
      };
      const originalWarn = console.warn;
      console.warn = (...args) => {
        
        parent.window.postMessage({ type: 'warn', args: args }, '*')
        originalWarn(...args)
      };
      const originalError= console.error;
      console.error = (...args) => {
        
        parent.window.postMessage({ type: 'error', args: args }, '*')
        originalError(...args)
      };
      window.onerror = function(msg, url, line){
        parent.window.postMessage({ type: 'error', args: msg, line: line}, '*')
      }
      ${files.js}</script>
    </html>
    `);
  }, [files.css, files.html, files.js]);

  return {
    srcDoc,
    changeCode,
  };
};
