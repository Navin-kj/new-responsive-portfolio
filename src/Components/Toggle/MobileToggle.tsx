import { useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { LuMoon } from "react-icons/lu";
import "../style.css";

const MobileToggle = () => {
  const getInitialTheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  console.log({ theme });

  return (
    <div className="mb-theme-toggle">
      {theme === "light" ? (
        <IoIosSunny onClick={toggleTheme} />
      ) : (
        <LuMoon onClick={toggleTheme} className="moon" />
      )}
    </div>
  );
};

export default MobileToggle;
