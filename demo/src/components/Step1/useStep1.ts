import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Source } from "../SourceSelector/SourceSelector";
import { useSourceContext } from "../../store/Context";

const sourceSelectors: Source[] = [
  "instagram",
  "x",
  "threads",
  "youTube",
  "medium",
  "linkedIn",
  "telegram",
  "tikTok",
  "facebook",
  "reddit",
  "pinterest",
  "dailymotion",
  "rumble",
  "techCrunch",
  "theGuardian",
  "europeanParliament",
  "nyTimes",
  "googleDailyMix",
  "craigslist",
  "newsweek",
  "cointelegraph",
  "vimeo",
  "foxnews",
  "coindesk",
  "cnn",
  "time",
  "vox",
  "mashable",
];

export const useStep1 = () => {
  const navigate = useNavigate();
  const { sources, updateCountry, setSources } = useSourceContext();
  const [unfinishedSources, setUnfinishedSources] = useState<
    Array<{ type: Source; userInput: string }>
  >([]);
  const [counter, setCounter] = useState(0);
  const [userCountry, setUserCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleButtonClick = () => {
    navigate("/app/setup/time", { state: { unfinishedSources, userCountry } });
    updateCountry(userCountry);
  };

  const addActiveSource = (type: Source, userInput: string) => {
    const duplicate = unfinishedSources.some(
      (source) => source.type === type && source.userInput === userInput
    );
    if (!duplicate && counter < 5) {
      setUnfinishedSources([...unfinishedSources, { type, userInput }]);
      setSources([...sources, { type, userInput }]);
      setCounter(counter + 1);
    }
  };

  const removeActiveSource = (type: Source, userInput: string) => {
    const updatedSources = unfinishedSources.filter(
      (item) => !(item.type === type && item.userInput === userInput)
    );
    setUnfinishedSources(updatedSources);
    setCounter(updatedSources.length);

    const updatedIsDuplicate = sources.filter(
      (item) => !(item.type === type && item.userInput === userInput)
    );
    setSources(updatedIsDuplicate);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredSources = useMemo(
    () =>
      sourceSelectors.filter((source) =>
        source.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  const noSourcesMessage =
    filteredSources.length === 0 ? "No sources found" : "";

  return {
    searchQuery,
    filteredSources,
    noSourcesMessage,
    handleButtonClick,
    addActiveSource,
    removeActiveSource,
    handleSearchChange,
  };
};
