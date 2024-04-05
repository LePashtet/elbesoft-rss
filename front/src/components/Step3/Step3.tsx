import { useState, ChangeEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Chip } from '../ui/Chip/Chip';
import { FormatSources } from './FormatSources';
import { postNewsletters } from '../../api/postNewsletters';
import { Input } from '../ui/Input';
import './Step3.scss';

export const Step3 = () => {
  const navigator = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isEmailInputVisited, setIsEmailInputVisited] = useState(false);

  const location = useLocation();
  const { sources = [], time = [], userCountry = [] } = location.state || {};

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleInputBlur = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    setIsValidEmail(isValid);
    setIsEmailInputVisited(true);
  };

  const handleButtonClick = async () => {
    if (isValidEmail) {
      try {
        const formattedSources = FormatSources(sources);
        const data = {
          email: email,
          sources: formattedSources,
          time,
          location: userCountry,
        };
        await postNewsletters(data);
        navigator("/");
      } catch (error) {
        console.error("Error:", error);
      }
    }
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
      {isClicked && (
        <div className='step3-input'>
          <Input
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            value={email}
            placeholder='Email'
            type='email'
          />
          {isEmailInputVisited && !isValidEmail && (
            <p className='step3-error-message'>Invalid email address</p>
          )}
        </div>
      )}
      <Button
        onClick={handleButtonClick}
        disabled={!isValidEmail}
        label='Start the magic!'
      />
    </div>
  )
}
