import React, { useEffect, useState } from "react";

const QuestionList = ({
  handleSelectQuestion,
  handleOptionSelect,
  selectId,
  focus,
  load,
  handleMarkSelect,
}) => {
  const [numQAll, setNumQAll] = useState({});
  // Load state from localStorage
  useEffect(() => {
    const num1Q = JSON.parse(localStorage.getItem("num1q"));
    const num2Q = JSON.parse(localStorage.getItem("num2q"));
    const num3Q = JSON.parse(localStorage.getItem("num3q"));
    const num4Q = JSON.parse(localStorage.getItem("num4q"));
    const num5Q = JSON.parse(localStorage.getItem("num5q"));
    const num6Q = JSON.parse(localStorage.getItem("num6q"));
    const num7Q = JSON.parse(localStorage.getItem("num7q"));
    const num8Q = JSON.parse(localStorage.getItem("num8q"));
    
    const all = {
      num1Q,
      num2Q,
      num3Q,
      num4Q,
      num5Q,
      num6Q,
      num7Q,
      num8Q,
    };
    setNumQAll(all);
  }, [selectId, handleOptionSelect]);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-1 gap-x-2 px-5 my-3">
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              "1",
              `${numQAll?.num1Q?.theme}`,
              `${numQAll?.num1Q?.mark}`
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === "1" ? focus?.active : ""
          } ${
            numQAll?.num1Q === null ? "bg-gray-300" : numQAll?.num1Q?.theme
          }  ${
            numQAll?.num1Q?.mark === "mark" ? "border-r-8 border-black" : ""
          }`}
        >
          1
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              "2",
              `${numQAll?.num2Q?.theme}`,
              `${numQAll?.num2Q?.mark}`
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === "2" ? focus?.active : ""
          } ${
            numQAll?.num2Q === null ? "bg-gray-300" : numQAll?.num2Q?.theme
          } ${
            numQAll?.num2Q?.mark === "mark" ? "border-r-8 border-black" : ""
          }`}
        >
          2
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              "3",
              `${numQAll?.num3Q?.theme}`,
              `${numQAll?.num3Q?.mark}`
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === "3" ? focus?.active : ""
          } ${
            numQAll?.num3Q === null ? "bg-gray-300" : numQAll?.num3Q?.theme
          } ${
            numQAll?.num3Q?.mark === "mark" ? "border-r-8 border-black" : ""
          }`}
        >
          3
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              "4",
              `${numQAll?.num4Q?.theme}`,
              `${numQAll?.num4Q?.mark}`
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === "4" ? focus?.active : ""
          } ${
            numQAll?.num4Q === null ? "bg-gray-300" : numQAll?.num4Q?.theme
          } ${
            numQAll?.num4Q?.mark === "mark" ? "border-r-8 border-black" : ""
          }`}
        >
          4
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              "5",
              `${numQAll?.num5Q?.theme}`,
              `${numQAll?.num5Q?.mark}`
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === "5" ? focus?.active : ""
          } ${numQAll?.num5Q === null ? "bg-gray-300" : numQAll?.num5Q?.theme}`}
        >
          5
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              "6",
              `${numQAll?.num6Q?.theme}`,
              `${numQAll?.num6Q?.mark}`
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === "6" ? focus?.active : ""
          }  ${
            numQAll?.num6Q === null ? "bg-gray-300" : numQAll?.num6Q?.theme
          }`}
        >
          6
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              "7",
              `${numQAll?.num7Q?.theme}`,
              `${numQAll?.num7Q?.mark}`
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === "7" ? focus?.active : ""
          } ${numQAll?.num7Q === null ? "bg-gray-300" : numQAll?.num7Q?.theme}`}
        >
          7
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleSelectQuestion(
              "8",
              `${numQAll?.num8Q?.theme}`,
              `${numQAll?.num8Q?.mark}`
            )
          }
          className={`px-5 py-3 w-14 ${
            focus?.id === "8" ? focus?.active : ""
          }  ${
            numQAll?.num8Q === null ? "bg-gray-300" : numQAll?.num8Q?.theme
          }`}
        >
          8
        </button>
      </div>
    </div>
  );
};

export default QuestionList;
