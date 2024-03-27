import { FC,useState } from "react";
import ChipClick from '@mui/material/Chip';

interface ChipProps {
  label: string;
  onClick?: () => void;
  isSelected?: boolean;
  type?: string;
}

export const Chip: FC<ChipProps> = ({ label, onClick, isSelected, type='click' }) => {
  const variant = isSelected ? 'filled' : 'outlined';
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <ChipClick
      label={label}
      variant={isSelected !== undefined ? variant : (type === 'click') ? (isClicked ? 'filled' : 'outlined') : 'filled'}
      onClick={onClick ? onClick : handleClick}
      sx={{
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#9E9E9E',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
        ...(type !== 'click' ? {
          cursor: 'not-allowed'
        } : {})
      }}
    />
  );
};
