import { useContext } from "react";
import { TabContext } from "./TabContext";

const useTab = () => useContext(TabContext);

export default useTab;
