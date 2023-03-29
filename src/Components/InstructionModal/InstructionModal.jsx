import React, { useState } from "react";
import { Link } from "react-router-dom";


const InstructionModal = () => {
  const [isSelected, setIsSelected] = useState("instructions");
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type='checkbox' id='test-modal' className='modal-toggle' />
      <div className='modal text-white'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-white'>
            Test instruction before you start! read carefully!!
          </h3>
          <h3 className="text-white font-bold">Topic : CSS</h3>

          {/* modal content */}
            {/* Tabs */}
          <div className="flex items-center gap-5 my-2 border-b border-gray-400 pb-2">
            <h3
              onClick={() => setIsSelected("instructions")}
              style={{
                fontSize: isSelected === "instructions" ? "18px" : "14px",
                color: isSelected === "instructions" ? "white" : "black",
              }}
              className="text-base"
            >
              Instructions
            </h3>
            <h3
              onClick={() => setIsSelected("syllabus")}
              style={{
                fontSize: isSelected === "syllabus" ? "18px" : "14px",
                color: isSelected === "syllabus" ? "white" : "black",
              }}
              className="text-base"
            >
              Syllabus
            </h3>
          </div>
          {/* Content */}
          {isSelected === "instructions" ? (
            <div>
              <h3 className="text-base font-bold my-3">
                Time allocated for this examination is 30 mins
              </h3>
              <h3 className="text-base font-bold mt-3">
                This paper consists of 1 section (11 questions)
              </h3>
              <p> (11 questions - 33 marks)</p>
              <h3 className="text-base font-bold my-3">
                When the timer (at top right) reaches zero, the examination will
                end by itself.
              </h3>
              <h3 className="text-base font-bold my-3">
                Positive and Negetive marks assosiacted with the questions are
                displayed at top-right.
              </h3>
              <h3 className="text-base font-bold my-3">
                Colour-Scheme for question navigation-panel:
              </h3>

              <div className="flex justify-start items-center gap-3">
                <p className="px-4 py-2 border border-gray-400 bg-white"></p>
                <p>You have not visited the question yet</p>
              </div>

              <div className="flex justify-start items-center gap-3">
                <p className="px-4 py-2 border border-gray-400 bg-[#cd7c7c]"></p>
                <p>You have not answered the question</p>
              </div>

              <div className="flex justify-start items-center gap-3">
                <p className="px-4 py-2 border border-gray-400 bg-[#a5cd7c]"></p>
                <p>You have answered the question</p>
              </div>

              <div className="flex justify-start items-center gap-3">
                <p className="px-4 py-2 border border-gray-400 bg-[#cd7c7c] border-r-black border-r-4"></p>
                <p>
                  You have not answered the question, but have marked it for
                  review
                </p>
              </div>

              <div className="flex justify-start items-center gap-3">
                <p className="px-4 py-2 border border-gray-400 bg-[#a5cd7c] border-r-black border-r-4"></p>
                <p>You have answered the question, but marked it for review</p>
              </div>

              <h3 className="text-base font-bold my-3">
                The Marked status for a question simply indicates that you would
                like to look at that question again. If a question is answered
                and marked, answer for that question will be considered in
                evaluation.
              </h3>

              <div className="text-right ">
                
                <Link to='/start-test'>
                <label
                    // htmlFor="test-modal"
                    className="py-2 px-4 rounded-md font-semibold text-white bg-blue-600 border-none "
                  >
                    Begin Test
                  </label>
                </Link>
                
              </div>
            </div>
          ) : (
            <div>
              <p className="font-bold text-black">Quant</p>
              <p> Numbers</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;
