import React from "react";
import { useViewModeContextProvider } from "../../context/ViewModeContext";

const Wrapper = ({ children }) => {
  const { viewMode, setViewMode } = useViewModeContextProvider();
  return (
    <div className={viewMode}>
      {children}
      <button onClick={() => setViewMode("dark-mode")}>Dark mode</button> <br />
      <button onClick={() => setViewMode("light-mode")}>Light mode</button>
    </div>
  );
};

export default Wrapper;
