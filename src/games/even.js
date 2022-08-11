import readlineSync from 'readline-sync';

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEvenNum = (num) => num % 2 === 0;

const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let win = true;

  for (let attemptsCount = 3; attemptsCount > 0; attemptsCount -= 1) {
    const num = generateRandomNum(1, 100);
    const correctAnswer = isEvenNum(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      attemptsCount = 0;
      win = false;
    }
  }

  if (win) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default startEvenGame;
