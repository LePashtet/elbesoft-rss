import {Button} from '../ui/Button'
import {useNavigate} from 'react-router-dom'
import {Source, SourceSelector} from "../SourceSelector/SourceSelector.tsx";
import {useState,FC} from "react";
import './Step1.scss'

const sourceSelectors:Source[] = [
  "instagram",
  "x",
  "medium",
  "techCrunch",
  "theGuardian",
  "europeanParliament",
  "nyTimes",
  "googleDailyMix",
];

export const Step1: FC = () => {
  const navigator = useNavigate();

  const [sources, setSources] = useState<
    Array<{ type: Source; param?: string }>
  >([]);
  const [counter, setCounter] = useState(0);
  const [userCountry, setUserCountry] = useState("");

  const handleButtonClick = () => {
    navigator("/setup/time", { state: { sources, userCountry } });
  };
  const addActiveSource = (type: Source, param?: string, userCountry?: any) => {
    if (counter < 5) {
      setSources([...sources, { type, param }]);
      setCounter(counter + 1);
      setUserCountry(userCountry);
    }
  };

  const removeActiveSource = (type: Source, param?: string) => {
    const updatedSources = sources.filter(item => !(item.type === type && item.param === param));
    setSources(updatedSources);
    setCounter(updatedSources.length);
  };

  return (
    <div className='step1'>
      <h1 className='step1-title'>Select Sources</h1>
      <div className='step1-chips'>
        {sourceSelectors.map((item)=>[
          <SourceSelector key={item} type={item} onSelect={addActiveSource} disabled={counter>=5} onRemove={()=>{}} />
        ])}
        {sources.map((item) => (
          <SourceSelector
            key={`${item.type}-${item.param}`}
            type={item.type}
            param={item.param}
            onSelect={()=>{}}
            onRemove={() => removeActiveSource(item.type, item.param)}
          />
        ))}
      </div>
      <span className='step1-count'>{counter}/5</span>
      <Button onClick={handleButtonClick} disabled={counter<1} label='ready'/>
      <a
        className='step1-link'
        href='mailto:contact@elbesoft.agency?subject=Can’t%20find%20source%3F%20Let%20us%20know!'
      >
        Can’t find source? Let us know!
      </a>
    </div>
  );
};
