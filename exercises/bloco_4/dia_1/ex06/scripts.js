/*
  6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
  Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto 
  com letras minúsculas, sem aumentar a quantidade de condicionais.

  Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
  Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
  Exemplo: bishop -> diagonals
*/

let pieceChess = 'Pawn';

if (pieceChess.toUpperCase() === 'PAWN') {
  console.log('Forward, one square');
} else if (pieceChess.toUpperCase === 'ROOK') {
  console.log('Forward, backward, left or right, any square');
} else if (pieceChess.toUpperCase === 'BISHOP') {
  console.log('Diagonals, any square');
} else if (pieceChess.toUpperCase === 'KNIGHT') {
  console.log(
    'One direction (Forward, backward, left or right) two squares and then turns to the left or right moving one more square'
    );
} else if (pieceChess.toUpperCase === 'QUEEN') {
  console.log('Forward, backward, left, right or diagonals, any square');
} else if (pieceChess.toUpperCase === 'KING') {
  console.log('Forward, backward, left, right or diagonals, one square')
} else {
  console.log("Error! This piece doesn't exist in the traditional chess")
}