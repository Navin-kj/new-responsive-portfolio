import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Tab from "./Components/Tab";
import Home from "./Pages/Home/Home";
import Contactpage from "./Pages/Contact";
import { useSelector } from "react-redux";
import { selectIsLoading } from "./data/selectors";
import FullScreenLoading from "./Components/Loading/FullScreenLoading";
import About from "./Pages/About";
import ProjectPage from "./Pages/Projects";
import BackToTop from "./Components/BackToTop";
import Chatbot from "./Pages/ChatBot";
import { qaPairs } from "./Pages/ChatBot/qaPairs";
import WebTab from "./Components/Tab/webTab";
import MobileToggle from "./Components/Toggle/MobileToggle";
import useDeviceType from "./utils/useDeviceType";
import IBHome from "./Pages/IBHome/IBHome";
import IBProject from "./Pages/IBProject/IBProject";
import Logo from "./Components/Logo/Logo";
import IBContact from "./Pages/IBContact/IBContact";
import { RootState } from "./data/rootReducer";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const isTabVisible = useSelector(
    (state: RootState) => state.tab.isTabVisible
  );
  const { isMobile, isBrowser } = useDeviceType();
  return (
    <BrowserRouter>
      {isLoading && <FullScreenLoading />}
      <div className="global-styles">
        {isBrowser && <Logo />}
        {isBrowser && isTabVisible && <WebTab />}
        {isMobile && <Tab />}
        {isMobile && <MobileToggle />}
        <Chatbot qaPairs={qaPairs} />
        <Routes>
          <Route path="/" element={isBrowser ? <IBHome /> : <Home />} />
          <Route path="/home" element={isBrowser ? <IBHome /> : <Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/projects"
            element={isBrowser ? <IBProject /> : <ProjectPage />}
          />
          <Route
            path="/contact"
            element={isBrowser ? <IBContact /> : <Contactpage />}
          />
        </Routes>
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
