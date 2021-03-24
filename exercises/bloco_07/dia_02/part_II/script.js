const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addEntry = (lesson, newKey, value) => {
  lesson[newKey] = value;
}
addEntry(lesson2, 'turno', 'tarde');

const listKeys = lesson => Object.keys(lesson);

const objLenght = lesson => Object.keys(lesson).length;
