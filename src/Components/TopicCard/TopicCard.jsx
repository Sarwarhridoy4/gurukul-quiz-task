import React from "react";

const TopicCard = () => {
  return (
    <div>
      <div class='flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800'>
        <div class='bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs'>
          <img
            class='mb-3 w-32 h-32 rounded-full shadow-lg mx-auto'
            src='https://cdn.pixabay.com/photo/2015/02/01/20/50/structure-620304_960_720.jpg'
            alt='Web Development'
          />
          <h1 class='text-lg text-gray-700'> Web Developmrnt </h1>
          <h3 class='text-sm text-gray-400 '> Jim carter </h3>
          <p class='text-xs text-gray-400 mt-4'>
            This is a professional web development course conducted by Mr Jean
            Carter. He has more than five years of real time experience working
            of working with web development.
          </p>

          {/* The button to open modal */}
          <label
            htmlFor='test-modal'
            className='btn bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide'
          >
            Start Test.
          </label>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
