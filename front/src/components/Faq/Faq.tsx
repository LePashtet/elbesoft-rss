import { Accordions } from '../ui/Accordions'
import BackgroundImg from '../../assets/faq-img.svg'
import './Faq.scss'


export const Faq=()=>{
  return(
    <div className='accodrion'>
    <img src={BackgroundImg} className='accodrion-image'/>
      <Accordions/>
    </div>
  )
}
