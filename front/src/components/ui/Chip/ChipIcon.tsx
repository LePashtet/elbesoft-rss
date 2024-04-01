import { FC } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FeedIcon from '@mui/icons-material/Feed';
import MediumIcon from'../../../assets/medium.svg'
import TechCrunchIcon from '../../../assets/techCrunch.svg'
import TheGuardIcon from '../../../assets/theGuardian.svg'
import EuroParlamentIcon from '../../../assets/euroParlament.svg'
import nyTimesIcon from '../../../assets/nytimes.svg';
import googleDailyMixIcon from '../../../assets/googleDailyMix.svg'
import { Source } from '../../SourceSelector/SourceSelector';

interface ChipIconProps {
  chipType?: Source;
}

const Icons = {
  'instagram': <InstagramIcon />,
  'x': <XIcon />,
  'medium': <img src={MediumIcon} />,
  'techCrunch': <img src={TechCrunchIcon} />,
  'theGuardian': <img src={TheGuardIcon} />,
  'europeanParliament': <img src={EuroParlamentIcon} />,
  'nyTimes': <img src={nyTimesIcon} />,
  'googleDailyMix': <img src={googleDailyMixIcon} />,
  'rss': <FeedIcon />,
};

const ChipIcon: FC<ChipIconProps> = ({ chipType }) => {
  const icon = chipType ? Icons[chipType] : Icons['rss'];

  return (
    <>
      {icon}
    </>
  );
};

export default ChipIcon;
