import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [remainingTime, setRemainingTime] = useState(20 * 60); // 1 hour in seconds

    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return (
        <div>
      <div className="text-2xl font-bold text-gray-white text-center space-y-4 my-4">
        <h3>Time Left</h3>
        <p>
          {hours.toString().padStart(2, "0")}{" "} :{" "}
          {minutes.toString().padStart(2, "0")}{" "}:{" "}
          {seconds.toString().padStart(2, "0")}
        </p>
      </div>
    </div>
    );
};

export default Timer;