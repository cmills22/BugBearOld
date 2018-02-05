var limitedText = document.getElementsByClassName('form--has-character-limit');
var charactersLeft = document.getElementsByClassName('character-count');
var inputBoxes = [(limitedText[0].getElementsByClassName('form-input'))[0], (limitedText[1].getElementsByClassName('form-input'))[0], (limitedText[2].getElementsByClassName('form-input'))[0]];
inputBoxes[0].addEventListener('input', function(){
    updateCount(charactersLeft[0], inputBoxes[0], 100);
});
inputBoxes[1].addEventListener('input', function(){
    updateCount(charactersLeft[1], inputBoxes[1], 30);
});
inputBoxes[2].addEventListener('input', function(){
    updateCount(charactersLeft[2], inputBoxes[2], 250);
});
function updateCount(output, read, max){
    output.textContent = max-parseInt(read.value.length);
}

var pop = document.getElementById('popupBackground');
var btn = document.getElementById('add');
var btn2 = document.getElementsByClassName('editable');
var hidePopup = document.getElementById('hidePopup');
btn.onclick = function(){
    pop.style.display = 'block';
}
for(var i=0;i<btn2.length;i++){
    btn2[i].onclick = function(){
        pop.style.display = 'block';
    }
}
hidePopup.onclick = function(){
    pop.style.display = 'none';
}
window.onclick = function(event){
    if(event.target==pop){
        pop.style.display = 'none';
    }
}
