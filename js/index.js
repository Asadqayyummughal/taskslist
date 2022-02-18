let  tasks=[];
let  takeinput;
let  addbtn=document.getElementById('addbtn');
let  clearbtn=document.getElementById('clearbtn');
let  collection_list
let delbtn
function addTask(event){
    event.preventDefault();
    collection_list=document.getElementById('taskecollection')
    takeinput=document.getElementById('takeinput').value;
    tasks.push(takeinput);
    let li=document.createElement('li');
    delbtn=document.createElement('button');
    delbtn.innerHTML='X';
    delbtn.style.border='none'
    delbtn.addEventListener('click',(event)=>{
        event.target.removeEventLis
       })
    li.innerHTML=takeinput;
    li.appendChild(delbtn)
    collection_list.appendChild(li);
 


}

