'use strict'
const switcher=document.querySelector('.btn');

switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme');

var ClassName = document.body.className; 
var icone = document.getElementById("icone");

if(ClassName == 'dark-theme')
{icone.style.color = '#fae900';} 
else{icone.style.color = '#0400fb';}
 console.log('current class name:'+ClassName);
});
