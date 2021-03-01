let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// 1. 
console.log(`Seja muito bem-vinda, ${info.personagem}.\n`);

// 2.
info.recorrente = 'Sim';
console.log(info);
console.log();

// 3.
for (let key in info) {
  console.log(key);
}
console.log();

// 4.
for (let key in info) {
  console.log(info[key]);
} 
console.log();

// 5.
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'Sim',
}
for (let key in info) {
  if (info[key] === 'Sim' && info2[key] === 'Sim') {
    console.log('Ambos recorrentes');
    break;
  } else if (info[key] === 'Não' && info2[key] === 'Não') {
    console.log('Ambos não recorrentes');
    break;
  } else if (info[key] === 'Sim' || info2 === 'Sim') {
    console.log('Ao menos um é recorrente')
  }
  console.log(`${info[key]} e ${info2[key]}`);
}