import React, { useRef } from "react";

const FAQItem = ({ item, onClick, isOpen }) => {
  const answerRef = useRef(null);

  return (
    <div
      className="border-b border-gray-200 dark:border-gray-700
    last:border-none transition-colors duration-300 hover:bg-gradient-to-r hover:from-gray-50
    hover:to-transparent dark:hover:from-gray-800/50 dark:hover:to-transparent"
      id={`faq-item-${item.id}`}
    >
      <button
        onClick={() => onClick(item.id)}
        className={`w-full py-5 px-4 flex justify-between items-center text-left
      focus:outline-none rounded-lg transition-all duration-200 cursor-pointer
      ${isOpen ? "bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200/90 dark:from-indigo-900/80   dark:via-purple-900/80 dark:to-indigo-900/80 dark:text-white" : " text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 dark:hover:from-indigo-400 dark:hover:to-purple-400"}`}
      >
        <span className="text-lg font-medium pr-6">{item.question}</span>
        <div
          className="w-8 min-w-8 aspect-square rounded-full flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 cursor-pointer
            dark:from-gray-700 dark:to-gray-800 dark:text-gray-300"
        >
          <i className={`bx ${isOpen ? "bx-minus" : "bx-plus"}`}></i>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-200 ease-out"
        id={`answer-${item.id}`}
        ref={answerRef}
        style={{
          maxHeight: isOpen ? answerRef.current?.scrollHeight + "px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-4 pt-0 pb-5 text-gray-600 dark:text-gray-300">
          <div className="p-3 rounded-lg overflow-y-auto max-h-[300px] ">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
