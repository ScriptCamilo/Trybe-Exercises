function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ];
  const monthDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const dayList = document.createElement('li');
    dayList.innerText = day;
    dayList.classList.add('day');
    if (day === 24 || day === 25 || day === 31) {
      dayList.classList.add('holiday');
    }

    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayList.classList.add('friday');
    }

    monthDays.appendChild(dayList);
  }
};

createDaysOfTheMonth();

function holidayButton(holiday) {
  let holidayBtn = document.createElement('button');
  holidayBtn.innerText = holiday;
  holidayBtn.id = 'btn-holiday';

  document.querySelector('.buttons-container').appendChild(holidayBtn);
}

holidayButton('Holidays');

function holidayColor() {
  let holidayList = document.querySelectorAll('.holiday');
  
  for (let index = 0; index < holidayList.length; index += 1){
    let holiday = holidayList[index];
    if (holiday.style.color === 'green') {
      holiday.style.color = '#777';
      holiday.style.fontWeight = 'normal';
    } else {
        holiday.style.color = 'green';
        holiday.style.fontWeight = 'bold';
    }
  }
}
document.querySelector('#btn-holiday').addEventListener('click', holidayColor);

function fridayButton(friday) {
  let fridayBtn = document.createElement('button');
  fridayBtn.innerText = friday;
  fridayBtn.id = 'btn-friday';

  document.querySelector('.buttons-container').appendChild(fridayBtn)
}
fridayButton('Fridays');

function fridayColor() {
  let fridayList = document.querySelectorAll('.friday');
  
  for (let index = 0; index < fridayList.length; index += 1){
    let friday = fridayList[index];
    if (friday.style.color === 'red') {
      friday.style.color = '#777';
      friday.style.fontWeight = 'normal';
    } else {
        friday.style.color = 'red';
        friday.style.fontWeight = 'bold';
    }
  }
}
document.querySelector('#btn-friday').addEventListener('click', fridayColor);

function dayZoom(event) {
  if (event.target.style.fontSize === '2rem') {
    event.target.style.fontSize = '10px';
  }
  event.target.style.fontSize = '2rem';
}

document.querySelector('.day').addEventListener('mouseover', dayZoom);
document.querySelector('.day').addEventListener('mouseout', dayZoom);