import { FC } from "react";
import { Chip } from "../ui/Chip/Chip.tsx";
import { Source } from "./SourceSelector.tsx";

interface SourceChipProps {
  type: Source;
  userInput?: string;
  isSelected: boolean;
  onClick: () => void;
  onRemove?: () => void;
}

const generateLabel = (
  type: Source,
  userInput: string | undefined,
) => {
  const defaultInput=userInput ? ` @${userInput}` : ""
  const profiles: { [key in Source]: string } = {
    instagram: `Instagram${defaultInput}`,
    x: `X${defaultInput}`,
    medium: `Medium${defaultInput}`,
    telegram: `Telegram${defaultInput}`,
    threads: `Threads${defaultInput}`,
    reddit: `Reddit${defaultInput}`,
    youTube: `YouTube${defaultInput}`,
    tikTok: `TikTok${defaultInput}`,
    facebook: `Facebook${defaultInput}`,
    pinterest: `Pinterest${defaultInput}`,
    linkedIn: `LinkedIn${defaultInput}`,
    rumble: `Rumble${defaultInput}`,
    dailymotion: `Dailymotion${defaultInput}`,
    techCrunch: `TechCrunch`,
    theGuardian: `The Guardian`,
    europeanParliament: `Euro Parliament`,
    nyTimes: `NYTimes`,
    googleDailyMix: `Google Daily Mix`,
    time: `Time`,
    coindesk: `Coindesk`,
    craigslist: `Craigslist`,
    newsweek: `Newsweek`,
    cointelegraph: `Cointelegraph`,
    vimeo: `Vimeo`,
    foxnews: `Foxnews`,
    cnn: `CNN`,
    vox: `Vox`,
    mashable: `Mashable`,
  };

  const label= profiles[type];

  if (userInput && !label.includes("@")) {
    const formattedUserInput = userInput.replace(
      /[A-Z]/g,
      (match) => ` ${match}`
    ).replace(/^./, userInput.charAt(0).toUpperCase());
    
    return `${label} ${formattedUserInput}`;
  }

  return label;
};

export const SourceChip: FC<SourceChipProps> = ({
  type,
  userInput,
  isSelected,
  onClick,
  onRemove,
}) => {
  const label = generateLabel(type, userInput);

  return (
    <div>
      <Chip
        chipType={type}
        label={label}
        style="sources"
        isSelected={isSelected}
        onClick={onClick}
        onRemove={onRemove}
      />
    </div>
  );
};
