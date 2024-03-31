import {FC, useMemo, useState} from "react";
import {Modal} from "../ui/Modal/Modal.tsx";
import {Chip} from "../ui/Chip.tsx";

export type Source = "instagram" | "x" | "rss"

interface SourceSelector {
    onSelect: (type: Source, text: string) => void,
    type?: Source
    param?: string
}

export const SourceSelector: FC<SourceSelector> = ({type = "instagram", param, onSelect}) => {
    const [openModal, setOpenModal] = useState(false)

    const clickHandler = () => {
        setOpenModal(true)
    }
    const selectHandler = (text: string) => {
        onSelect(type, text)
        setOpenModal(false)
    }


    const source = useMemo(() => {
        switch (type) {
            case "instagram":
                return <Chip label={`Instagram profile of ${param ? param : "@ ______"}`} isSelected={!!param} onClick={clickHandler}/>
            case "x":
                return <Chip label="X profile of @ ______" onClick={clickHandler}/>
            default:
                return <Chip label="profile of @ ______" onClick={clickHandler}/>
        }
    }, [])

    return (
        <>
            {source}
            {openModal && <Modal handleClose={selectHandler}/>}
        </>
    )
}
