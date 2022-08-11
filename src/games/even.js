// import readlineSync from 'readline-sync';
import startGame from '../index.js';

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEvenNum = (num) => num % 2 === 0;

const startEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getCorrectAnswer = () => {
    const question = generateRandomNum(1, 100);
    const correctAnswer = isEvenNum(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  startGame(rules, getCorrectAnswer);
};

export default startEvenGame;
