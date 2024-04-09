import React, { FC } from "react";

import styles from "./Input.module.scss";

type InputProps = {
  placeholder?: string;
  type: "range" | "text" | "number" | "password";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  range?: {
    min: number;
    max: number;
    step?: number;
  };
};

export const Input: FC<InputProps> = ({
  isDisabled,
  type,
  value,
  onChange,
  placeholder,
  range,
}) => {
  const setInputClassNames = (
    type: "range" | "text" | "number" | "password",
  ) => {
    switch (type) {
      case "range":
        return styles["input-range"];
      case "text":
        return styles["input-text"];
      case "number":
        return styles["input-number"];
      case "password":
        return styles["input-password"];
    }
  };
  const inputClassNames = setInputClassNames(type);
  return (
    <input
      className={inputClassNames}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      min={range?.min}
      max={range?.max}
      step={range?.step}
      disabled={isDisabled}
    />
  );
};
