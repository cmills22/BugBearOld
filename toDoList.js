/*********************** Global Variables ************************/

//buttons on main page
var addbtn = document.getElementById('add');

//elements related to information form
var nameField = document.getElementById('input-name');
var dateField = document.getElementById('datepicker');
var statusField = document.getElementById('status-dropdown');
var tagField = document.getElementById('input-tag');
var tagColourField = document.getElementById('input-tag-colour');
var descriptionField = document.getElementById('input-description');
var textFieldsLimited = document.getElementsByClassName('form--has-character-limit');//all divs containing text fields with character limits
var inputFields = [(textFieldsLimited[0].getElementsByClassName('form-input'))[0], 
    (textFieldsLimited[1].getElementsByClassName('form-input'))[0], 
    (textFieldsLimited[2].getElementsByClassName('form-input'))[0]];
var charactersLeft = document.getElementsByClassName('character-count');//divs that display number of characters remaining
var infoPopup = document.getElementById('popupBackground');//div for information form
var hidePopup = document.getElementById('hidePopup');//button that closes information popup
var savebtn = document.getElementById('save');





/********************* Functions related to main page (buttons and to-do items) *****************/

//when add button is clicked make information popup appear and clear all information fields
addbtn.onclick = function(){
    infoPopup.style.display = 'block';
    nameField.value = "";
    dateField.value = "";
    statusField.selectedIndex = 0;
    tagField.value = "";
    tagColourField.selectedIndex = 0;
    descriptionField.value = "";
    nameField.parentElement.classList.remove('form--error');
    document.getElementById('popupBackground').getElementsByClassName('text-help')[1].innerHTML = "Maximum of 100 characters.";
    dateField.parentElement.classList.remove('form--error');
    infoPopup.getElementsByClassName('text-help')[2].innerHTML = "";
    updateCount(charactersLeft[0], inputFields[0], 100);
    updateCount(charactersLeft[1], inputFields[1], 30);
    updateCount(charactersLeft[2], inputFields[2], 250);
}





/********************* Functions about information form ******************************/

//when text field with character limit has content changed, 
//update the display of the number of characters left
inputFields[0].addEventListener('input', function(){
    updateCount(charactersLeft[0], inputFields[0], 100);
});
inputFields[1].addEventListener('input', function(){
    updateCount(charactersLeft[1], inputFields[1], 30);
});
inputFields[2].addEventListener('input', function(){
    updateCount(charactersLeft[2], inputFields[2], 250);
});

//function to update number informing user how many characters they have left
function updateCount(output, read, max){
    output.textContent = max-parseInt(read.value.length);
}



//if cancel button on popup is clicked, close popup
hidePopup.onclick = function(){
    infoPopup.style.display = 'none';
}