import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { Source, SourceSelector } from "../SourceSelector/SourceSelector.tsx";
import { useState, FC } from "react";
import { useSourceContext } from "../../store/Context.tsx";
import "./Step1.scss";

const sourceSelectors: Source[] = [
  "instagram",
  "x",
  "medium",
  "techCrunch",
  "theGuardian",
  "europeanParliament",
  "nyTimes",
  "googleDailyMix",
];

export const Step1: FC = () => {
  const navigator = useNavigate();
  const { updateData } = useSourceContext();

  const [sources, setSources] = useState<
    Array<{ type: Source; userInput: string }>
  >([]);
  const [counter, setCounter] = useState(0);
  const [userCountry, setUserCountry] = useState("");

  const handleButtonClick = () => {
    navigator("/app/setup/time", { state: { sources, userCountry } });
    updateData(sources, userCountry);
  };
  const addActiveSource = (
    type: Source,
    userInput: string,
    userCountry?: any,
  ) => {
    if (counter < 5) {
      setSources([...sources, { type, userInput }]);
      setCounter(counter + 1);
      setUserCountry(userCountry);
    }
  };

  const removeActiveSource = (type: Source, userInput: string) => {
    const updatedSources = sources.filter(
      (item) => !(item.type === type && item.userInput === userInput),
    );
    setSources(updatedSources);
    setCounter(updatedSources.length);
  };

  return (
    <div className="step1">
      <h1 className="step1-title">Select Sources</h1>
      <div className="step1-chips">
        {sourceSelectors.map((item) => [
          <SourceSelector
            key={item}
            type={item}
            onSelect={addActiveSource}
            disabled={counter >= 5}
            onRemove={() => {}}
          />,
        ])}
        {sources.map((item) => (
          <SourceSelector
            key={`${item.type}-${item.userInput}`}
            type={item.type}
            userInput={item.userInput}
            onSelect={() => {}}
            onRemove={() => removeActiveSource(item.type, item.userInput)}
          />
        ))}
      </div>
      <span className="step1-count">{counter}/5</span>
      <Button
        onClick={handleButtonClick}
        disabled={counter < 1}
        label="ready"
      />
      <a
        className="step1-link"
        href="mailto:hello@happymvp.com?subject=Can’t%20find%20source%3F%20Let%20us%20know!"
      >
        Can’t find source? Let us know: hello@happymvp.com!
      </a>
    </div>
  );
};
