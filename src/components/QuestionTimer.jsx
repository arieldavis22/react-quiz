import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting Timeout");
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("setting interval");

    setInterval(() => {
      setRemainingTime((prevState) => prevState - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
