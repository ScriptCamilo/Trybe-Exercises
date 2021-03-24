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

// 1
const addEntry = (lesson, newKey, value) => lesson[newKey] = value;
addEntry(lesson2, 'turno', 'tarde');

// 2
const listKeys = lesson => Object.keys(lesson);

// 3
const objLenght = lesson => Object.keys(lesson).length;

// 4
const listValues = lesson => Object.values(lesson);

// 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// 6
const allStudents = lessons => {
  let studentCount = 0;
  for (let index in lessons) {
    studentCount += lessons[index].numeroEstudantes;
  }
  return studentCount;
}
allStudents(allLessons);