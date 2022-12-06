import readlineSync from 'readline-sync';
const brainGame = () => {
    const usrName = readlineSync.question('May I have your name?');
    console.log(`Hello,${usrName}!`);
};
export default brainGame;
