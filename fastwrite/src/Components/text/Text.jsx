import { useInterval } from "@mantine/hooks";
import React, { useState, useEffect } from "react";
import UseInterval from "react-timer-hook";
const TypingChallenge = () => {
  const words = ["salom", "hello", "next", "react", "pyton"];
  const [currentWord, setCurrentWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  useEffect(() => {
    setCurrentWord(generateWord());
  }, []);
  const generateWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  useEffect(() => {
    if (userInput === currentWord) {
      setScore(score + 1);
      setCurrentWord(generateWord());
      setUserInput("");
    }
  }, [userInput, currentWord]);
  useInterval(() => {
    setTimeLeft(timeLeft - 1);
  }, 1000);
  return (
    <div className="text-center">
      <h1>Time left: {timeLeft}</h1>

      <h1 className="text-center">{currentWord}</h1>

      <textarea
        value={userInput}
        onChange={handleInputChange}
        name=""
        id=""
        cols="136"
        rows="10"
      ></textarea>
      <h1>Score: {score}</h1>
    </div>
  );
};
export default TypingChallenge;
