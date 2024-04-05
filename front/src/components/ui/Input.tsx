import {ChangeEvent, FC } from 'react';
import { OutlinedInput } from '@mui/material';

interface InputProps {
  value:string;
  onChange:(event:ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: string;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  onBlur,
}) => {
  return (
    <OutlinedInput
      placeholder={placeholder}
      type={type}
      onBlur={onBlur}
      sx={{
        '& input': {
          fontFamily: 'Montserrat',
          fontSize: '18px',
          lineHeight: '28.5px',
          fontWeight: 400,
        },
        width: '400px',
        height: '60px'
      }} value={value} onChange={onChange}/>
  )
}