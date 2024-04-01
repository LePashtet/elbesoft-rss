import { FC, useEffect, useMemo, useState } from "react";
import { RssConfirmationModal } from "../Step1/RssConfirmationModal/RssConfirmationModal.tsx";
import { getUserApi } from "../../api/getUserApi.ts";
import { SourceChip } from "./SourceChip.tsx";


export type Source = "instagram" | "x" | 'medium'|"techCrunch"|'theGuardian'|'europeanParliament'|'nyTimes'|'googleDailyMix';
interface SourceSelectorProps {
    onSelect: (type: Source, text: string) => void ;
    type: Source;
    param?: string;
    onRemove: () => void;
    disabled?: boolean;
}


export const SourceSelector: FC<SourceSelectorProps> = ({ type = "instagram", param, onSelect, onRemove, disabled }) => {
    const [openModal, setOpenModal] = useState(false);
    const [isDisabled, setIsDisabled] = useState(disabled);
    const [userCountry, setUserCountry] = useState('');

    useEffect(() => {
        setIsDisabled(disabled); 
    }, [disabled]);

    const clickHandler = async () => {
            if(isDisabled) return;
            setOpenModal(true);

            if (type === 'googleDailyMix') {
                const country = await getUserApi();
                if (country) {
                    setUserCountry(country);
                }

            }
    };

    const selectHandler = (text: string) => {
            onSelect(type!, text);
            setOpenModal(false);
    };

    const source = useMemo(() => {
        return (
            <SourceChip
                type={type!}
                param={param}
                isSelected={!!param}
                onClick={param ? () => {} : clickHandler }
                onRemove={param ? onRemove : undefined}
            />
        );
    }, [type, param, clickHandler, onRemove]);

    return (
        <>
            {source}
            {openModal && <RssConfirmationModal type={type} handleClose={selectHandler} />}
        </>
    );
};
