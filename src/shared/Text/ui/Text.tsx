import { FC } from "react";

type TextProps = {
  text: string;
};

export const Text: FC<TextProps> = ({ text }) => {
  return (
    <div>
      <p className="text text-sm uppercase text-center text-gray-[#f0f0f0]">
        {text}
      </p>
    </div>
  );
};
