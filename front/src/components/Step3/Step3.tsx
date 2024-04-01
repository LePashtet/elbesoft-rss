import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Chip } from '../ui/Chip/Chip';
import './Step3.scss';

export const Step3 = () => {
  const navigator = useNavigate();
  const [isClicked, setIsClicked] = useState(false); 

  const handleButtonClick = () => {
    navigator('/');
  };

  const ClickHandler = () => {
    setIsClicked(!isClicked); 
  };

  return(
    <div className='step3'>
      <h1 className='step3-title'>Pick location</h1>
      <div className='step3-chips'>
      <Chip onClick={ClickHandler} label='Email' isSelected={isClicked} />
      <Chip onClick={()=>{}} type='disable' label='Telegram Bot'/>
      <Chip onClick={()=>{}} type='disable' label='RSS'/>
      <Chip onClick={()=>{}} type='disable' label='Pigeon Mail'/>

      </div>
      <Button onClick={handleButtonClick} label='Start the magic!'/>
    </div>
  )
}
