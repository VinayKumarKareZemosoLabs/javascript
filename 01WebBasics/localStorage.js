// localStorage.setItem('hero','thor');

localStorage.setItem('todo','Buy gym equipment');
var myHero = localStorage.getItem('hero');

localStorage.setItem('todo', 'Complete Restourant assignment')

console.log(myHero);
localStorage.clear();

console.log(localStorage.getItem('todo'))

localStorage.removeItem('thor');



console.log(localStorage.getItem('thor'));