// import readlineSync from 'readline-sync';
import startGame from '../index.js';

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const operators = ['+', '-', '*'];

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    default:
      return operand1 * operand2;
  }
};

const startCalcGame = () => {
  const rules = 'What is the result of the expression?';

  const getCorrectAnswer = () => {
    const operator = operators[generateRandomNum(0, 3)];
    const firstNum = generateRandomNum(1, 10);
    const secondNum = generateRandomNum(1, 10);
    const question = `${firstNum} ${operator} ${secondNum}`;
    const correctAnswer = String(calculate(firstNum, secondNum, operator));

    return [question, correctAnswer];
  };

  startGame(rules, getCorrectAnswer);
};

export default startCalcGame;
