import React, { useEffect, useRef, useState } from "react";
import "./CircularBar.css";

const ProgressBar = ({ progressEndValue }) => {
  const [progressValue, setProgressValue] = useState(0);
  const speed = 100;
  const progressRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    progressRef.current = setInterval(() => {
      setProgressValue((prevProgress) => prevProgress + 1);
    }, speed);

    return () => {
      clearInterval(progressRef.current);
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    if (progressValue >= progressEndValue) {
      clearInterval(progressRef.current);
    }
  }, [progressValue, progressEndValue, isClient]);

  const progressBarStyle = {
    background: `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
    )`,
  };

  return (
    isClient && ( // Conditionally render on the client
      <div className=" flex justify-center">
        <span>
          <div className="circular-progress" style={progressBarStyle}></div>
          {/* <div className="value-container">{`${progressValue}%`}</div> */}
        </span>
      </div>
    )
  );
};

export default ProgressBar;
