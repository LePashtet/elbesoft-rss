import { useNavigate } from 'react-router-dom'
import { Button } from '../../ui/Button'
import { Chip } from '../../ui/Chip'
import './Step3.scss'

export const Step3=()=>{
  const navigator=useNavigate()
  const handleButtonClick = () => {
    navigator('/page/home'); 
  };
  return(
    <div className='step3'>
      <h1 className='step3-title'>Pick location</h1>
      <div className='step3-chips'>
      <Chip label='Email'/>
      <Chip type='disable' label='Telegram Bot'/>
      <Chip type='disable' label='RSS'/>
      <Chip type='disable' label='Pigeon Mail'/>

      </div>
      <Button onClick={handleButtonClick} label='Start the magic!'/>
    </div>
  )
}