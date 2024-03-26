import { FC,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../ui/Button'
import { Chip } from '../../ui/Chip'
import './Step2.scss'

interface Step2Props {
  onSelectChip: (label: string) => void;
  selectedChip: string | null;
}

export const Step2: FC<Step2Props> = ({ onSelectChip }) => {
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const navigator=useNavigate()

  const handleButtonClick = () => {
    navigator('/page/step3'); 
  };

  const handleChipClick = (label: string) => {
    setSelectedChip(label);
    onSelectChip(label);
  };

  return (
    <div className='step2'>
      <h1 className='step2-title'>Pick Time</h1>
      <div className='step2-chips'>
        <Chip 
          label='5 AM' 
          onClick={() => handleChipClick('5 AM')} 
          isSelected={selectedChip === '5 AM'} 
          type='click'
        />
        <Chip 
          label='5 PM' 
          onClick={() => handleChipClick('5 PM')} 
          isSelected={selectedChip === '5 PM'} 
          type='click'
        />
      </div>
      <Button onClick={handleButtonClick} label='Confirm' disabled={!selectedChip}/>
    </div>
  );
};