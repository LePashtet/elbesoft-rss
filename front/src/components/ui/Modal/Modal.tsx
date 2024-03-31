import {Modal as ModalMui} from '@mui/base/Modal';
import {FC, useState} from "react";
import {createPortal} from "react-dom";

import {Backdrop} from "./Backdrop.tsx";
import {Button} from "../Button.tsx";

import "./modal.scss"


export const Modal: FC<{ handleClose: (text: string) => void }> = ({handleClose}) => {

    const [text, setText] = useState("")

    return (
        createPortal(<ModalMui
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open
            slots={{backdrop: Backdrop}}
            className="modal-wrapper"
        >
            <div className="modal-content">
                <h2 id="unstyled-modal-title" className="modal-title">
                    Text in a modal
                </h2>
                <div id="unstyled-modal-description" className="modal-action">
                    <Button label="Select" onClick={() => handleClose(text)}/>
                </div>
            </div>
        </ModalMui>, document.body));
}
