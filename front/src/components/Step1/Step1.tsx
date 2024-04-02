import {Button} from '../ui/Button'
import {useNavigate} from 'react-router-dom'
import {Source, SourceSelector} from "../SourceSelector/SourceSelector.tsx";

import './Step1.scss'
import {useState} from "react";

export const Step1 = () => {
    const navigator = useNavigate();

    const [sources, setSource] = useState<Array<{ type: Source, param?: string }>>([{
        type: "instagram",
        param: "bablo.it"
    }])
    const handleButtonClick = () => {
        navigator('/page/step2');
    };
    const addActiveSource = (type: Source, param?: string) => {
        setSource(
            // @ts-ignore
            ...sources,
            {
                type,
                param
            }
        )
    }
    const removeActiveSource = (type: Source, param?: string) => {
        setSource(
            sources.filter((obj) => {
                return obj.type !== type && obj.param !== param
            })
        )
    }

    return (
        <div className='step1'>
            <h1 className='step1-title'>Select Sources</h1>
            <div className='step1-chips'>
                <SourceSelector type="instagram" onSelect={addActiveSource}/>
                <SourceSelector type="x" onSelect={addActiveSource}/>
                {sources.map(item => <SourceSelector type={item.type} param={item.param} onSelect={() => removeActiveSource(item)}/>)}
            </div>
            <span className='step1-count'>0/3</span>
            <Button onClick={handleButtonClick} label='ready'/>
            <a 
                className='step1-link' 
                href='mailto:contact@elbesoft.agency?subject=Can’t%20find%20source%3F%20Let%20us%20know!' 
            >
                Can’t find source? Let us know!
            </a>
        </div>
    )
}
