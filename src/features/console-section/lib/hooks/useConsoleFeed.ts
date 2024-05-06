import { useCallback, useEffect, useState } from "react";
import { Consoled } from "../../model/types";

export const useConsoleFeed = () => {
  const [consoleFeed, setConsoleFeed] = useState<Consoled[]>([]);
  const handleConsoleFeed = useCallback((e: MessageEvent) => {
    const { data } = e;
    if (data.type === "log") {
      setConsoleFeed(prev => [...prev, { type: "log", msg: data.args }]);
    } else if (data.type === "error") {
      setConsoleFeed(prev => [...prev, { type: "error", msg: `${data.args}` }]);
    }
  }, []);
  const resetConsoleFeed = () => {
    setConsoleFeed([]);
  };

  useEffect(() => {
    window.addEventListener("message", handleConsoleFeed);

    return () => {
      window.removeEventListener("message", handleConsoleFeed);
    };
  }, [handleConsoleFeed]);

  return { consoleFeed, resetConsoleFeed };
};
