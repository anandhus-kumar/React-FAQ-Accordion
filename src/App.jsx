import React, { useEffect, useState } from "react";
import FAQlist from "./components/FAQlist";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-grey-50 via-grey-100 to-gray-50 dark:from-gray-950 dark:via-dark-900 dark:to-gray-950 transition-colors duration-300">
      <div className="container mx-auto py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 bia-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
            {" "}
            FAQ Center
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white transition-colors duration-300">
            {" "}
            Find answers to the most common question about React
          </p>
        </header>
      </div>
      <FAQlist toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
};

export default App;
