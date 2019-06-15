let button = document.querySelector('.button');
let testA = document.querySelector('a');
let backgroundButton = document.querySelector('.background__button');

  button.addEventListener('mouseenter', function(){
    testA.classList.add('is-white')
    backgroundButton.classList.add('is-hover');
  });

  button.addEventListener('mouseleave', function(){
    testA.classList.remove('is-white')
    backgroundButton.classList.remove('is-hover');
  });