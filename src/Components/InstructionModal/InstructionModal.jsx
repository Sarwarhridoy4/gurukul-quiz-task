import React from "react";

const InstructionModal = () => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>
            Test instruction before you start! read carefully!!
          </h3>
          <p className='py-4'>
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className='modal-action'>
            <label htmlFor='my-modal' className='btn'>
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;
