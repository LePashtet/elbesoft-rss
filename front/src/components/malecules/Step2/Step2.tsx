import { useNavigate } from 'react-router-dom'
import { Button } from '../../ui/Button'
import { Chip } from '../../ui/Chip'
import './Step2.scss'

export const Step2=()=>{
  const navigator=useNavigate()
  const handleButtonClick = () => {
    navigator('/page/step3'); 
  };
  return(
    <div className='step2'>
      <h1 className='step2-title'>Pick Time</h1>
      <div className='step2-chips'>
      <Chip label='5 AM'/>
      <Chip label='5 PM'/>
      </div>
      <Button onClick={handleButtonClick} label='Confirm'/>
    </div>
  )
}