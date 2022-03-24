'use strict'
const switcher=document.querySelector('.btn');

switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme');

/* precisa retornar depois para dark */
var ClassName = document.body.className; 
var icone = document.getElementById("icone");

if(ClassName == 'light-theme')
{icone.style.color = '#0400fb';} 
else{icone.style.color = '#fae900';}
 console.log('current class name:'+ClassName);
});
