import React from "react";

type Props = {
  srcDoc: string;
};

export default function index({ srcDoc }: Props) {
  return (
    <iframe
      title="codeBlock"
      srcDoc={srcDoc}
      className="flex h-full w-full bg-white"
    />
  );
}
