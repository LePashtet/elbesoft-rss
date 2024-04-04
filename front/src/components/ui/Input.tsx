import {ChangeEvent, FC } from 'react';
import { OutlinedInput } from '@mui/material';

interface InputProps{
  value:string,
  onChange:(event:ChangeEvent<HTMLInputElement>)=>void;
}

export const Input:FC<InputProps>=({value,onChange})=>{
  return(
    <OutlinedInput sx={{
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