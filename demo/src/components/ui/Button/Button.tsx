import { FC, MouseEventHandler } from "react";
import Btn from "@mui/material/Button";
import clsx from "clsx";
import "./Button.scss";

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler;
  disabled?: boolean;
  style?: "green" | "transparent" | "regular";
  size?: "large" | "regular";
  className?: string;
}

const buttonStyles = {
  green: "green",
  transparent: "transparent",
  regular: "",
};
const buttonSize = {
  large: "large",
  regular: "fit-content",
};

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  style = "regular",
  className,
  size = "regular",
}) => (
  <Btn
    variant="outlined"
    size="medium"
    onClick={onClick}
    disabled={disabled}
    className={clsx("button", buttonStyles[style], className, buttonSize[size])}
  >
    {label}
  </Btn>
);
