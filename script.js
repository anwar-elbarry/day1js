const addButton = document.getElementById('addTask');
const container  = document.querySelector('.container');
const todo  = document.getElementById('todo');
const inProgress  = document.getElementById('inProgress');
const done  = document.getElementById('done');
const form  = document.getElementById('form');
const formContainer  = document.querySelector('.formContainer');

const submitBtn = document.getElementById('submitBtn');

let todoList =JSON.parse( localStorage.getItem('todo')) ?? [];
let inProgressList =JSON.parse( localStorage.getItem('inProgress')) ?? [];
let doneList =JSON.parse( localStorage.getItem('done')) ?? [];

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    name = '';
    type = '';
    
    console.log('todo localStorage:', localStorage.getItem('todo'));
    console.log('inProgress localStorage:', localStorage.getItem('inProgress'));
    console.log('done localStorage:', localStorage.getItem('done'));

    
  

    
    if(!name === '' || type === ''){
        alert('fill all the form please');
        return ;
    }
    let newtask = {
        'name' : name,
        'type' : type,
    };
    console.log('New task:', newtask);
   
    try {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<p> ${newtask.name} </p>`;
        switch (newtask.type) {
            case 'todo':
                todoList.push(newtask);
                localStorage.setItem('todo', JSON.stringify(todoList));
                todo.appendChild(card);
                break;
        
            case 'inprogress':
                inProgressList.push(newtask);
                localStorage.setItem('inProgress', JSON.stringify(inProgressList));
                inProgress.appendChild(card);
                break;
            case 'done': 
                doneList.push(newtask);
                localStorage.setItem('done', JSON.stringify(doneList));
                done.appendChild(card);
                break;
        }
    } catch(error) {
        console.error('Error storing task:', error);
    }
})

 document.addEventListener('DOMContentLoaded',() =>{
    todoList.forEach(task => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<p> ${task.name} </p>`;
        todo.appendChild(card);
    });
    inProgressList.forEach(task => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<p> ${task.name} </p>`;
        inProgress.appendChild(card);
    });
    doneList.forEach(task => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<p> ${task.name} </p>`;
        done.appendChild(card);
    });
    
})

addButton.addEventListener('click',() => {
      formContainer.style.display = 'hidden'
});