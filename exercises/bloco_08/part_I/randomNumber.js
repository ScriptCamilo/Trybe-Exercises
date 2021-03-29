const checkNumber = (number, bet) => (number === bet) ? 'Parabéns, você ganhou' : 'Tente novamente';

const randomNumber = (bet, callback) => {
  const number = Math.floor(Math.random() * 5) + 1

  return callback(number, bet)
}

console.log(randomNumber(3, checkNumber));