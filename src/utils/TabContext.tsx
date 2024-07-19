import React, { createContext, useState, ReactNode } from "react";

// Define the shape of the context state
interface TabContextType {
  isTabVisible: boolean;
  showTab: () => void;
  hideTab: () => void;
}

// Create a default context value (can be an empty object as default)
const defaultContextValue: TabContextType = {
  isTabVisible: false,
  showTab: () => {},
  hideTab: () => {},
};

// Create a Context
export const TabContext = createContext<TabContextType>(defaultContextValue);

// Create a Provider Component
export const TabProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isTabVisible, setIsTabVisible] = useState<boolean>(false);
  const showTab = () => {
    console.log("Tab shown");
    setIsTabVisible(true);
  };

  const hideTab = () => {
    console.log("Tab hidden");
    setIsTabVisible(false);
  };

  return (
    <TabContext.Provider value={{ isTabVisible, showTab, hideTab }}>
      {children}
    </TabContext.Provider>
  );
};
