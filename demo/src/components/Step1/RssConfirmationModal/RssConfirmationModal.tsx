import { Modal as ModalMui } from "@mui/base/Modal";
import { ChangeEvent, FC, useState } from "react";
import { createPortal } from "react-dom";
import { Input } from "../../ui/Input.tsx";
import { Backdrop } from "./Backdrop.tsx";
import { CustomAutocomplete } from "../../ui/Autocomplete/Autocomplete.tsx";
import { Button } from "../../ui/Button.tsx";
import "./RssConfirmationModal.scss";

export const RssConfirmationModal: FC<{
  handleSelect: (text: string) => void;
  handleClose: () => void;
  type?: string;
}> = ({ handleSelect, handleClose, type }) => {
  const [text, setText] = useState<string>("");
  const [errorVisible, setErrorVisible] = useState<boolean>(false);

  const isRss =
    type !== "x" &&
    type !== "instagram" &&
    type !== "medium" &&
    type !== "googleDailyMix";

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleAutocompleteChange = (newText: string) => {
    setText(newText);
  };

  const handleSelectModal = () => {
    if (text.length >= 1) {
      handleSelect(text);
    } else {
      setErrorVisible(true);
    }
  };

  return createPortal(
    <ModalMui
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open
      slots={{ backdrop: Backdrop }}
      className="modal-wrapper"
    >
      <div className="modal-content">
        <h2 id="unstyled-modal-title" className="modal-title">
          {isRss
            ? "Pick a topic of news"
            : type === "googleDailyMix"
              ? "Enter a topic of news"
              : "Enter a username"}
        </h2>

        {isRss ? (
          <CustomAutocomplete
            type={type ? type : ""}
            onChange={handleAutocompleteChange}
            value={text}
          />
        ) : (
          <Input onChange={handleInputChange} value={text} />
        )}
        {errorVisible ? (
          <p className="modal-error">
            {isRss ? "Please enter a topic of news" : "Please enter username"}
          </p>
        ) : (
          ""
        )}
        <div id="unstyled-modal-description" className="modal-action">
          <Button label="Select" onClick={handleSelectModal} />
          <Button label="Close" onClick={handleClose} />
        </div>
      </div>
    </ModalMui>,
    document.body,
  );
};
