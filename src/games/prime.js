import startGame from '../index.js';

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isPrimeNum = (num) => {
  if (num < 2) {
    return false;
  }

  for (let div = 2; div <= Math.sqrt(num); div += 1) {
    if (num % div === 0) {
      return false;
    }
  }

  return true;
};

const startPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getCorrectAnswer = () => {
    const question = generateRandomNum(1, 20);
    const correctAnswer = isPrimeNum(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  startGame(rules, getCorrectAnswer);
};

export default startPrimeGame;
