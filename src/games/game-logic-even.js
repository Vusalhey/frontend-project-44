import startGame from '../startGame.js';
import genRandNum from '../randNum.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const rulEvenGame = (num) => num % 2 === 0;

const rulQuestAndAns = () => {
  const numQuestion = genRandNum(1, 50);
  const answer = rulEvenGame(numQuestion) ? 'yes' : 'no';
  return [numQuestion, answer];
};

const evenGame = () => {
  startGame(description, rulQuestAndAns);
};
export default evenGame;
