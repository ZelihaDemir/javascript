const inputDiv = document.querySelector('.inputDiv');
const input = document.getElementById('input');
const button = document.getElementById('button')
const contentDiv = document.querySelector('.contentDiv')

var calculate = 0;
button.addEventListener('click',go);

function go(){
    if(input.value !=""){
        calculate++;
    var paragraf = document.createElement('p');
    var deleteButton = document.createElement('div');
    var finishButton = document.createElement('div');

    finishButton.classList.add('finishButton')

    
    deleteButton.classList.add('deleteButton')
    deleteButton.innerText = 'sil';
    finishButton.innerText ='Yapildi'

    paragraf.innerText =calculate+'. ' +input.value;
    contentDiv.appendChild(paragraf);
    paragraf.appendChild(deleteButton);
    paragraf.appendChild(finishButton)
    input.value = "";

    deleteButton.addEventListener('click',function(){
        calculate--;
        contentDiv.removeChild(paragraf);
    })
    finishButton.addEventListener('click')
}
}
