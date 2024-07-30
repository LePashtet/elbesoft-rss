import { FC, ChangeEvent, useState } from "react";
import { OutlinedInput } from "@mui/material";
import "./Input.scss";

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: string;
  valid?: boolean;
  onValidChange?: (isValid: boolean) => void;
  visited?: boolean;
  className?: string;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  onBlur,
  placeholder,
  type,
  valid,
  onValidChange,
  visited,
  className,
}) => {
  const [isValid, setIsValid] = useState(valid || false);

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
    validate(value);
  };

  const validate = (inputValue: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(inputValue);
    setIsValid(isValid);
    if (onValidChange) {
      onValidChange(isValid);
    }
  };

  return (
    <div className="input-container">
      <OutlinedInput
        placeholder={placeholder}
        type={type}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
        className={`${className} outlined-input`}
      />
      {visited && !isValid && (
        <p className="error-message">Invalid email address</p>
      )}
    </div>
  );
};
