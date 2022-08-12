import startGame from '../index.js';

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getGreatestCommonDivisor = (num1, num2) => {
  let maxDiv = 1;
  for (let div = 2; div < num1; div += 1) {
    if (num1 % div === 0 && num2 % div === 0) {
      maxDiv = div;
    }
  }
  return maxDiv;
};

const startGcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const getCorrectAnswer = () => {
    const firstNum = generateRandomNum(1, 50);
    const secondNum = generateRandomNum(1, 50);
    const question = `${firstNum} ${secondNum}`;
    const correctAnswer = String(getGreatestCommonDivisor(firstNum, secondNum));
    return [question, correctAnswer];
  };

  startGame(rules, getCorrectAnswer);
};

export default startGcdGame;
