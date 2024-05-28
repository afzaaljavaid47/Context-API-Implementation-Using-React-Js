import React, { useState, useEffect } from 'react';

const IntervalExample = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
      console.log("Starting");
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    console.log("Ending");
    return () => clearInterval(interval);
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        {seconds} seconds have elapsed since mounting.
      </header>
    </div>
  );
};

export default IntervalExample;