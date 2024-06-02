import React, { createContext, useContext, useState, ReactNode } from "react";
import { Source } from "../components/SourceSelector/SourceSelector";

interface SourceContextValue {
  sources: Array<{ type: Source; userInput: string }>;
  userCountry: string;
  time: string;
  updateTime: (time: string) => void;
  updateData: (
    newSources: Array<{ type: Source; userInput: string }>,
    newUserCountry: string,
  ) => void;
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
  const [sources, setSources] = useState<
    Array<{ type: Source; userInput: string }>
  >([]);
  const [userCountry, setUserCountry] = useState("");
  const [time, setTime] = useState("");

  const updateData = (
    newSources: Array<{ type: Source; userInput: string }>,
    newUserCountry: string,
  ) => {
    setSources(newSources);
    setUserCountry(newUserCountry);
  };
  const updateTime = (time: string) => {
    setTime(time);
  };

  return (
    <SourceContext.Provider
      value={{ sources, userCountry, updateData, updateTime, time }}
    >
      {children}
    </SourceContext.Provider>
  );
};
