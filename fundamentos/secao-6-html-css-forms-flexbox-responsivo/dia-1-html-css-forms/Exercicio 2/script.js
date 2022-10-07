// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function(eve){
    eve.preventDefault();
    console.log(HREF_LINK);
})

INPUT_CHECKBOX.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(INPUT_CHECKBOX);
})

INPUT_TEXT.addEventListener('keypress', function(event) {
    event.preventDefault();
    let x = event.key;
    if (x === 'a'){
        x.innerHTML = INPUT_TEXT.value;
    } else {
        alert ('Voce só pode digitar a letra a');
    }
})
    

