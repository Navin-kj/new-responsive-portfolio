import { useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { LuMoon } from "react-icons/lu";
import "../style.css";
const ThemeToggle = () => {
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
    <div className="theme-toggle">
      {theme === "light" ? (
        <IoIosSunny onClick={toggleTheme} />
      ) : (
        <LuMoon onClick={toggleTheme} />
      )}
    </div>
  );
};

export default ThemeToggle;
