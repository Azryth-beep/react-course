import React, { useState, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
    stopIncrement();
  };

  const handleMouseLeave = () => {
    stopIncrement();
  };

  const handleMouseUp = () => {
    stopIncrement();
  };

  const startIncrementing = () => {
    if (intervalRef.current){
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100);
  };

  const handleMouseDown = () => {
    timeoutRef.current = setTimeout(() => {
      startIncrementing();
    }, 200);
  };

  const handleClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setCount((prevCount) => prevCount + 1);
  };

  const stopIncrement = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };

  return (
    <div className="container mx-auto p-4 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">Contador: {count}</h1>
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            Incrementar
          </button>
          <button
            className="bg-blue-300 hover:bg-blue-500 text-gray-700 font-bold py-2 px-4 rounded-full mr-2"
            onClick={handleDecrement}
          >
            Decrementar
          </button>
          <button
            className="bg-yellow-300 hover:bg-yellow-500 text-gray-700 font-bold py-2 px-4 rounded-full"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
