import { Button } from '../ui/Button'
import './Home.scss'

export const Home=()=>{
  return(
    <div className='home'>
    <h1 className='home-title'>Telegram + Email</h1>
    <span className='home-text'>5 AM + 5 PM</span>
    <div className='home-button'>
    <Button onClick={()=>{}} label='Remove'/>
    </div>
        
    <a className='home-link' 
    href='mailto:contact@elbesoft.agency?subject=Want%20to%20have%20more?%20Let%20us%20know!'
    >
      Want to have more? Let us know!
    </a>
    </div>
  )
}
