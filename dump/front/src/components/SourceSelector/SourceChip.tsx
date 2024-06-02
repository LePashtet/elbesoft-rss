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

export const SourceChip: FC<SourceChipProps> = ({
  type,
  userInput,
  isSelected,
  onClick,
  onRemove,
}) => {
  let label;

  switch (type) {
    case "instagram":
      label = `Instagram profile of @${userInput ? userInput : "______"}`;
      break;
    case "x":
      label = `X profile of @${userInput ? userInput : "______"}`;
      break;
    case "medium":
      label = `Medium profile of @${userInput ? userInput : "______"}`;
      break;
    case "techCrunch":
      label = `TechCrunch topic of news is ${userInput ? userInput : "______"}`;
      break;
    case "theGuardian":
      label = `The Guardian topic of news is ${userInput ? userInput : "______"}`;
      break;
    case "europeanParliament":
      label = `Euro Parliament topic of news is ${userInput ? userInput : "______"}`;
      break;
    case "nyTimes":
      label = `NYTimes topic of news is ${userInput ? userInput : "______"}`;
      break;
    case "googleDailyMix":
      label = `Google Daily Mix topic of news is ${userInput ? userInput : "______"}`;
      break;
    default:
      label = "profile of @ ______";
      break;
  }

  return (
    <Chip
      chipType={type}
      label={label}
      isSelected={isSelected}
      onClick={onClick}
      onRemove={onRemove}
    />
  );
};
