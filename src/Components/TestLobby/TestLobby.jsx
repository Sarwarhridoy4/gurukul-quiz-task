import React from 'react';
import circleCheck from '../../assets/circle-check.svg'
import rightArrow from '../../assets/arrow-right.svg'
import Timer from '../Timer/Timer';

const TestLobby = () => {
    return (
        <div>
      <div className="grid lg:grid-cols-5">
        {/* left section  */}
        <div className="border border-gray-300 text-white">
          <Timer></Timer>
          <p className="border border-gray-300"></p>
          <div className="grid lg:grid-cols-4 gap-1 px-5 my-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => (
              <div>
                <button className="px-5 py-3 w-14 bg-gray-300">
                  {index + 1}
                </button>
              </div>
            ))}
          </div>
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
        </div>
        {/* right section  */}
        <div className="">right</div>
      </div>
    </div>
    );
};

export default TestLobby;