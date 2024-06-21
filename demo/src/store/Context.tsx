import React, { createContext, useContext, useState, ReactNode } from "react";
import { Source } from "../components/SourceSelector/SourceSelector";

interface SourceData {
  type: Source;
  userInput: string;
}

interface SourceContextValue {
  sources: Array<SourceData>;
  userCountry: string;
  time: string;
  updateTime: (time: string) => void;
  updateCountry: (newUserCountry: string) => void;
  setSources: (sources: Array<SourceData>) => void;
  checkDuplicate: (type: Source, text: string) => boolean;
}

const SourceContext = createContext<SourceContextValue | undefined>(undefined);

export const useSourceContext = () => {
  const context = useContext(SourceContext);
  if (!context) {
    throw new Error("useSourceContext must be used within a SourceProvider");
  }
  return context;
};

export const SourceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sources, setSources] = useState<Array<SourceData>>([]);
  const [userCountry, setUserCountry] = useState("");
  const [time, setTime] = useState("");

  const updateCountry = (newUserCountry: string) => {
    setUserCountry(newUserCountry);
  };

  const updateTime = (time: string) => {
    setTime(time);
  };
  const checkDuplicate = (type: Source, text: string) => {
    return sources.some(
      (source) => source.type === type && source.userInput === text
    );
  };

  return (
    <SourceContext.Provider
      value={{
        sources,
        userCountry,
        time,
        updateCountry,
        updateTime,
        setSources,
        checkDuplicate,
      }}
    >
      {children}
    </SourceContext.Provider>
  );
};
