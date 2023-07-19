import React, { useEffect, useRef, useState } from "react";
import './CircularBar.css'

const ProgressBar = ({ progressEndValue }) => {
  const [progressValue, setProgressValue] = useState(0);
  const speed = 50;
  const progressRef = useRef(null);

  useEffect(() => {
    progressRef.current = setInterval(() => {
      setProgressValue((prevProgress) => prevProgress + 1);
    }, speed);

    return () => {
      clearInterval(progressRef.current);
    };
  }, []);

  useEffect(() => {
    if (progressValue >= progressEndValue) {
      clearInterval(progressRef.current);
    }
  }, [progressValue, progressEndValue]);

  const progressBarStyle = {
    background: `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
    )`,
  };

  return (
    <div className=" flex justify-center">
      <span>
      <div className=" circular-progress" style={progressBarStyle}></div>
      {/* <div className=" value-container">{`${progressValue}%`}</div> */}
      </span>
      
      
    </div>
  );
};

export default ProgressBar;