import React from "react";

type Props = {
  onClickHandler: () => void;
  text: string;
};

export default function Button({ onClickHandler, text }: Props) {
  return (
    <button
      onClick={onClickHandler}
      className="h-10 rounded-md bg-primary px-6 font-bold text-black"
      type="submit"
    >
      {text}
    </button>
  );
}
