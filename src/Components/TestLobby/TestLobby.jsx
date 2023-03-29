import React, { useEffect, useState } from 'react';
import circleCheck from '../../assets/circle-check.svg'
import rightArrow from '../../assets/arrow-right.svg'
import rightArrowWhite from "../../assets/right-arrow-white.svg";
import Timer from '../Timer/Timer';
import QuestionList from '../QuestionList/QuestionList';

const TestLobby = () => {

    // All States
    const [mainData, setMainData] = useState([]);
    const [selected, setSelected] = useState([]);
    const [selectId, setSelectId] = useState("1");
    const [focus, setFocus] = useState({});
    const [theme, setTheme] = useState("");
    const [mark, setMark] = useState("");
    const [load, setLoad] = useState(false);
  
    useEffect(() => {
      fetch("Questions.json")
        .then((res) => res.json())
        .then((data) => {
          const allData = data?.data?.questions;
          if (allData) {
            const filterData = allData?.filter((data) => data.id === selectId);
            setMainData(filterData);
          }
        });
    }, [selectId, load]);
  
  
    const handleMarkSelect = () => {
      // Select function will be Here
    };
  
    const handleOptionSelect = (questionId, option, correctAnswer) => {
      // remove previously selected option for the same question
      const filteredSelected = selected.filter(
        (item) => item.questionId !== questionId
      );
      // add newly selected option
      setSelected([...filteredSelected, { questionId, option, correctAnswer }]);
      // update answer
      // updateAnswer(questionId, option);
  
      // checkTheme and update
      const view = { id: questionId, theme: "bg-[#a5cd7c]", mark: mark };
      localStorage.setItem(`num${selectId}q`, JSON.stringify(view));
      setLoad(true);
    };
  
    // selectId -------
    const handleSelectQuestion = (id, newTheme, newMark) => {
      setSelectId(id);
      setLoad(true);
      const active = "border-2 border-black rounded";
      setFocus({ id, active });
  
      console.log(theme);
  
      const pinkColor = "bg-[#cd7c7c]";
      const isNotMark = "noMark";
  
      if (newTheme === "undefined" && newMark === "undefined") {
        const view = { id, theme: pinkColor, mark: isNotMark };
        setTheme(pinkColor);
        setMark(isNotMark);
        localStorage.setItem(`num${id}q`, JSON.stringify(view));
      } else {
        const view = { id, theme: newTheme, mark: newMark };
        setTheme(newTheme);
        setMark(newMark);
        localStorage.setItem(`num${id}q`, JSON.stringify(view));
      }
    };
  
    // next value---
    const handleClick = () => {
      if (selectId === "11") {
        const active = "border-2 border-black rounded";
        setFocus({ id: "1", active });
        setSelectId("1");
      }
       else {
        const number = Number(selectId);
        const add = number + 1;
        const active = "border-2 border-black rounded";
        setFocus({ id: `${add}`, active });
        setSelectId(`${add}`);
      }
    };
    return (
        <div>
      <div className="grid lg:grid-cols-5">
        {/* left section  */}
        <div className="border border-gray-300 text-white">
          <Timer></Timer>
            <p className="border border-gray-300"></p>
            <QuestionList selectId={selectId}
            focus={focus}
            load={load}
            handleMarkSelect={handleMarkSelect}
            handleSelectQuestion={handleSelectQuestion}
            handleOptionSelect={handleOptionSelect}
            ></QuestionList>
         
          <div className="px-5 py-3 text-center space-y-2">
            <div className="flex justify-center items-center gap-2">
              <img className="w-5 h-5" src={circleCheck} alt="" />
              <p>Progress saved</p>
            </div>
            <p className="text-blue-600">View Instructions</p>
            <button className="btn bg-[#4caf50] hover:bg-[#47bd4b] border-none">
              Finished Test
            </button>
          </div>
        </div>
        {/* middle section  */}
        <div className="col-span-3 border-b border-gray-300">
          <div className="flex justify-between items-center p-4 border border-b-2 bg-slate-100">
            <div className="flex justify-center items-center gap-1">
              <img className="w-6 h-5" src={rightArrow} alt="" />
              <h1 className="font-bold">Single Correct</h1>
            </div>
            <div className="flex items-center">
              <p className="text-[#4caf50] border border-gray-300 p-2 rounded-l-md">
                + 3.00
              </p>
              <p className="text-[#db2020] border border-l-0 border-gray-300 p-2 rounded-r-md">
                - 1.00
              </p>
            </div>
            </div>
            {mainData?.map((question) => (
              <div key={question?.id}>
                <h3 className="font-bold px-5 py-7">{question?.question}</h3>
                <div>
                  {question?.options?.map((option, index) => (
                    <div
                      key={index}
                      className=" px-5 py-5 border-t border-gray-300"
                    >
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-success border-gray-400 mr-4"
                          value={option}
                          checked={selected.some(
                            (item) =>
                              item.questionId === question.id &&
                              item.option === option
                          )}
                          onChange={() =>
                            handleOptionSelect(
                              question.id,
                              option,
                              question?.correctAnswer
                            )
                          }
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        {/* right section  */}
          <div className="">
          <div className="lg:border lg:border-gray-300 md:border-white px-16 py-32 lg:pt-20 space-y-5">
          <button
            onClick={() => handleMarkSelect()}
            className="w-full py-2 px-4 rounded-md font-semibold text-black bg-gray-300 border-none"
          >
            Mark
          </button>
          <button className="w-full py-2 px-4 rounded-md font-semibold text-black bg-gray-300 border-none">
            Reset
          </button>

          <button
            onClick={handleClick}
            className="w-full py-2 px-4 rounded-md font-semibold text-white bg-blue-600 border-none"
          >
            <img className="w-10 h-10 mx-auto" src={rightArrowWhite} alt="" />{" "}
            Next
          </button>
        </div>
          </div>
      </div>
    </div>
    );
};

export default TestLobby;