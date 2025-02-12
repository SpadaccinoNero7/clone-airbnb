import { createContext, useContext, useState } from "react";
export const ViewModeContext = createContext(null);

export default function ViewModeContextProvider({ children }) {
  const [viewMode, setViewMode] = useState("light-mode");

  return (
    <div>
      <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
        {children}
      </ViewModeContext.Provider>
    </div>
  );
}

export const useViewModeContextProvider = () => {
  const context = useContext(ViewModeContext);
  return context;
};
