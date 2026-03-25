import React from "react";

const FAQItem = ({ item, onToggleItem, openId, onToggleExpandAll }) => {
  return (
    <div
      className="border-b border-gray-200 dark:border-gray-700
    last:border-none transition-colors duration-300 hover:bg-gradient-to-r hover:from-gray-50
    hover:to-transparent dark:hover:from-gray-800/50 dark:hover:to-transparent"
    >
      <button
        onClick={() => onToggleItem(item.id)}
        className="w-full py-5 px-4 flex justify-between items-center text-left
      focus:outline-none rounded-lg transition-all duration-200 cursor-pointer text-gray-900
      dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 dark:hover:from-indigo-400 dark:hover:to-purple-400"
      >
        <span className="text-lg font-medium pr-6">{item.question}</span>
        <div
          className="w-8 min-w-8 aspect-square rounded-full flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 cursor-pointer
            dark:from-gray-700 dark:to-gray-800 dark:text-gray-300"
        >
          <i className="bx bx-plus"></i>
        </div>
      </button>
      {openId == item.id ? (
        <div className="overflow-hidden ">
          <div className="p-4 pt-0 pb-5 text-gray-600 dark:text-gray-300">
            <div className="p-3 rounded-lg overflow-y-auto max-h-[300px] ">
              {item.answer}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FAQItem;
