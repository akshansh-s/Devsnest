let addToDoButton=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click',function(){
        if(paragraph.style.textDecoration="none"){
            paragraph.style.textDecoration="line-through";}
        else{
            paragraph.style.textDecoration="none";
        }
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);

    })
})

fetch("https://api.chucknorris.io/jokes/random")

.then((response)=>{
    return response.json();
})
.then((data)=>{
    var joke=data.value;
    document.write("MEME: ",joke);
})
.catch();