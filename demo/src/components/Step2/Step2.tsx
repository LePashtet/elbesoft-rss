import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button/Button.tsx";
import { Chip } from "../ui/Chip/Chip";
import "./Step2.scss";
import { useSourceContext } from "../../store/Context.tsx";

const TIME_OPTIONS = [
  { label: "5 AM", value: "5" },
  { label: "5 PM", value: "17" },
];

export const Step2: FC = () => {
  const [selectedChip, setSelectedChip] = useState<string>("");
  const navigator = useNavigate();
  const { updateTime } = useSourceContext();

  const handleButtonClick = () => {
    if (selectedChip) {
      updateTime(selectedChip);
      navigator("/app/setup/target");
    }
  };

  const handleChipClick = (value: string) => {
    setSelectedChip(value);
  };

  return (
    <div className="step2">
      <h1 className="step2-title">Pick Time</h1>
      <div className="step2-chips">
        {TIME_OPTIONS.map(({ label, value }) => (
          <Chip
            key={value}
            label={label}
            onClick={() => handleChipClick(value)}
            isSelected={selectedChip === value}
          />
        ))}
      </div>
      <Button
        onClick={handleButtonClick}
        style={selectedChip ? "green" : "regular"}
        label="Confirm"
        disabled={!selectedChip}
        size="large"
      />
    </div>
  );
};
