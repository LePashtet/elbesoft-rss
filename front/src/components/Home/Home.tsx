import { Button } from '../ui/Button'
import BackgroundImg from '../../assets/home-img.svg'
import './Home.scss'

export const Home=()=>{
  return(
    <div className='home'>
    <img src={BackgroundImg} className='home-image'/>
    <h1 className='home-title'>Telegram + Email</h1>
    <span className='home-text'>5 AM + 5 PM</span>
    <div className='home-button'>
    <Button onClick={()=>{}} label='Remove'/>
    </div>
    <a className='home-link'>Want to have more? Let us know!</a>
    </div>
  )
}
