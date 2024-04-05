import { FC, MouseEventHandler } from "react";
import Btn from "@mui/material/Button";

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <Btn
      variant="outlined"
      size="medium"
      onClick={onClick}
      disabled={disabled}
      sx={{
        backgroundColor: '#0000000A',
        border: 'none',
        borderRadius: '4px',
        color: '#000000',
        fontSize: '14px',
        lineHeight: '36px',
        letterSpacing: '1.25px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        height: '30px',
        padding: '0px 16px',

        '&:hover': {
          border: '1px solid black',
        },
      }}
    >
      {label}
    </Btn>
  );
};
