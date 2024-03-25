import { Button } from '../../ui/Button'
import { Chip } from '../../ui/Chip'
import { useNavigate } from 'react-router-dom'
import './Step1.scss'

export const Step1=()=>{
  const navigator=useNavigate();
  const handleButtonClick = () => {
    navigator('/page/step2'); 
  };
  return(
    <div className='step1'>
      <h1 className='step1-title'>Select Sources</h1>
      <div className='step1-chips'>
      <Chip label='dddd'/>
      </div>
      <span className='step1-count'>0/3</span>
      <Button onClick={handleButtonClick} label='ready'/>
      <a className='step1-link'>Can’t find source? Let us know!</a>
    </div>
  )
}