import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    const persistedValue = localStorage.getItem("mode");
    return persistedValue !== null ? persistedValue : "light";
  });

  useEffect(() => {
    localStorage.setItem("mode", theme);
  }, [theme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <header className="bg-white dark:bg-gray-700 p-6 flex justify-between items-center shadow-md">
      <p
        onClick={handleClick}
        className="dark:text-white text-black font-medium text-lg cursor-pointer"
      >
        where in the world?
      </p>
      <p
        onClick={handleThemeSwitch}
        className="dark:text-white text-black font-light text-lg cursor-pointer"
      >
        Dark Mode &#9789;{" "}
      </p>
    </header>
  );
};
