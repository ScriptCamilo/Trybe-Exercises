const infos = (name) => {
  const nameForEmail = name.split(' ').join('').toLowerCase();

  const email = `${nameForEmail}@trybe.com`;

  return {name, email}
}

const newEmployees = () => {
  const employees = {
    id1: infos('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: infos('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: infos('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees());