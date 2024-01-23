var elText = document.querySelector('.text')
var num = prompt('yoshingizni kiriting') 
var b = 18 
if(num == b){ 
    elText.textContent = 'hush kelibsiz'; 
}
else if(num < b){ 
    elText.textContent = 'siz 18 yoshga yetmagansiz'; 
}
else if(num > b){ 
    elText.textContent = 'xush kelibsiz'; 
}

