function changeBackgroundColor(element, color) {
  let selector = document.querySelectorAll(element);
  for (let index = 0; index < selector.length; index += 1){
    selector[index].style.backgroundColor = color;
  }
}

changeBackgroundColor('body', 'rgb(243, 243, 243)');
changeBackgroundColor('header', 'rgb(0, 176, 105)');
changeBackgroundColor('footer', 'rgb(0, 53, 51)');
changeBackgroundColor('.emergency-tasks', 'rgb(255, 159, 132)');
changeBackgroundColor('.emergency-tasks h3', 'rgb(165, 0, 243)');
changeBackgroundColor('.no-emergency-tasks', 'rgb(249, 219, 94)');
changeBackgroundColor('.no-emergency-tasks h3', 'rgb(35, 37, 37)');