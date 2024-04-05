import {FC, useState} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import {Button} from '../ui/Button'
import {Chip} from '../ui/Chip/Chip'
import './Step2.scss'

export const Step2: FC = () => {
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const navigator = useNavigate()

  const location = useLocation();
  const sources = location.state?.sources || [];
  const userCountry = location.state?.userCountry || [];
  const handleButtonClick = () => {
    navigator('/setup/target', {
      state: { sources, time: selectedChip, userCountry },
    });
  };

  const handleChipClick = (label: string) => {
    setSelectedChip(label);
  };

  return (
    <div className='step2'>
      <h1 className='step2-title'>Pick Time</h1>
      <div className='step2-chips'>
        <Chip
          label='5 AM'
          onClick={() => handleChipClick('5 AM')}
          isSelected={selectedChip === '5 AM'}
        />
        <Chip
          label='5 PM'
          onClick={() => handleChipClick('5 PM')}
          isSelected={selectedChip === '5 PM'}
        />
      </div>
      <Button onClick={handleButtonClick} label='Confirm' disabled={!selectedChip}/>
    </div>
  );
};
