document.getElementById('local').innerHTML = localStorage.getItem('localCount').toString();
document.getElementById('session').innerHTML = sessionStorage.getItem('sessionCount');

function localIncrement()
{
   var x = +localStorage.getItem('localCount')+1;
   localStorage.setItem('localCount',x);
   document.getElementById('local').innerHTML = localStorage.getItem('localCount').toString();
}

function localDecrement()
{
   var x = +localStorage.getItem('localCount')-1;
   localStorage.setItem('localCount',x);
   document.getElementById('local').innerHTML = localStorage.getItem('localCount').toString();
}

function sessionIncrement()
{
   var x = +sessionStorage.getItem('sessionCount')+1;
   sessionStorage.setItem('sessionCount',x);
   document.getElementById('session').innerHTML = sessionStorage.getItem('sessionCount').toString();
}

function sessionDecrement()
{
   var x = +sessionStorage.getItem('sessionCount')-1;
   sessionStorage.setItem('sessionCount',x);
   document.getElementById('session').innerHTML = sessionStorage.getItem('sessionCount').toString();
}