import { FC, useState } from "react";
import { RssConfirmationModal } from "../Step1/RssConfirmationModal/RssConfirmationModal.tsx";
import { getUserApi } from "../../api/getUserApi.ts";
import { SourceChip } from "./SourceChip.tsx";

export type Source = "instagram" | "x" | 'medium'|"techCrunch"|'theGuardian'|'europeanParliament'|'nyTimes'|'googleDailyMix';

interface SourceSelectorProps {
  onSelect: (type: Source, text: string, userCountry: any) => void;
  type: Source;
  userInput?: string;
  onRemove: () => void;
  disabled?: boolean;
}

export const SourceSelector: FC<SourceSelectorProps> = ({ type = "instagram", userInput, onSelect, onRemove, disabled }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [userCountry, setUserCountry] = useState('');

  const clickHandler = async () => {
    if(isDisabled) return;
    setOpenModal(true);

    const country = await getUserApi();
    if (country) {
      setUserCountry(country);
    }
  };

  const selectHandler = (text: string) => {
    onSelect(type!, text, userCountry);
    setOpenModal(false);
  };

  const source = (
    <SourceChip
      type={type!}
      userInput={userInput}
      isSelected={!!userInput}
      onClick={userInput ? () => {} : clickHandler }
      onRemove={userInput ? onRemove : undefined}
    />
  );

  return (
    <>
      {source}
      {openModal && <RssConfirmationModal type={type} handleClose={selectHandler} />}
    </>
  );
};
