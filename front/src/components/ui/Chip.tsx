import { FC,useState } from "react";
import ChipClick from '@mui/material/Chip';


export const Chip: FC<{ label:string, type?:string}> = ({ label ,type='click'}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <ChipClick sx={{
      height:'32px',
      display:'flex',
      alignItems:'center', 
      justifyContent:'center',
      color:'#9E9E9E',
      fontFamily:'Roboto',
      fontWeight:400,
      fontSize:'14px',
      lineHeight:'20px',
      ...(type !== 'click' ? {
        cursor:'not-allowed'
      } : {})
    }} 
    label={label} variant={(type === 'click') ? (isClicked ? 'filled' : 'outlined') : 'filled'} onClick={handleClick} />

  );
};