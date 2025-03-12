
const backgrounds = [
    "url('https://images.wallpapersden.com/image/download/kimi-no-na-wa_a2xrbmmUmZqaraWkpJRobWllrWdma2U.jpg')",

    "url('https://images.wallpapersden.com/image/download/anime-city-4k-aesthetic_bmZuZ2iUmZqaraWkpJRobWllrWdma2U.jpg')",
        
    "url('https://images.wallpapersden.com/image/download/zen-tanjiro-kamado-hd-demon-slayer_bmdmbGmUmZqaraWkpJRpZWVlrWdnaW0.jpg')",
    "url('https://images7.alphacoders.com/737/thumb-1920-737400.jpg')"
]
function updateBackground() {
    const body = document.body;
    const randomBackground = backgrounds[Math.floor(Math.random()*backgrounds.length)];
    body.style.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${randomBackground}`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center center';
    body.style.backgroundAttachment = 'fixed';
    body.style.backgroundRepeat = 'no-repeat';

}
// time function 
const timeElement = document.getElementById('time');
const timeTwentyFourElement = document.getElementById('time24');

function updateTime() {
    const now = new Date();
    const greetingElement = document.getElementById('greeting');
    const hours = now.getHours();
    const minutes = now.getMinutes();
    let hour12 = 0;
    if (hours === 0){
        hour12 = 12;
    } else if (hours > 12) {
        hour12 = hours - 12; 
    } else {
        hour12 = hours;
    }

    if (minutes < 10) {
        timeElement.textContent = `${hour12}:0${minutes}`;
    } else {
        timeElement.textContent = `${hour12}:${minutes}`;
    }
    if (hours < 10) {
        if (minutes < 10) {
            timeTwentyFourElement.textContent = `0${hours}:0${minutes}`;
        } else {
            timeTwentyFourElement.textContent = `0${hours}:${minutes}`;
        }
    } else {
        if (minutes < 10) {
            timeTwentyFourElement.textContent = `${hours}:0${minutes}`;
        } else {
            timeTwentyFourElement.textContent = `${hours}:${minutes}`;
        }
    }

    let greeting = '';
    if (hours < 12) {
        greeting = 'Good morning, ';
    } else if (hours < 18) {
        greeting = 'Good afternoon, ';
    } else {
        greeting = 'Good evening, ';
    }
    greetingElement.textContent = greeting;
}

// end time function 

// Time Button


const buttonTime = document.getElementById('btn-time');

buttonTime.addEventListener('click', () => {
    timeElement.classList.toggle('hidden');
    timeTwentyFourElement.classList.toggle('hidden');
});


// end Time Button


// name input elements
const nameInput = document.getElementById('name-input');
const nameInputContainer = document.getElementById('name-input-container');
const nameText = document.getElementById('name-text');
const buttonName = document.getElementById('btn-name');

function nameButton(){
    nameInputContainer.classList.toggle('hidden');
    nameText.classList.toggle('hidden');
    nameText.textContent = nameInput.value.trim();
    
    nameInput.focus();
    nameInput.classList.add('flash-effect');
    nameInput.addEventListener('animationend', () => {
        nameInput.classList.remove('flash-effect'); }, { once: true }); 
}
buttonName.addEventListener('click', nameButton)


function nameEdit() {
    const inputValue = nameInput.value.trim();
    if (inputValue) {
        nameText.textContent = inputValue;
    }
    
    nameInputContainer.classList.toggle('hidden');
    nameText.classList.toggle('hidden');
    
    nameText.classList.add('flash-effect');
    nameText.addEventListener('animationend', () => {
        nameText.classList.remove('flash-effect'); }, { once: true }); 
}

nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        nameEdit();
    }
});




//focus elements
const focusInput = document.getElementById('focus-input');
const focusDisplay = document.getElementById('focus-display');
const focusText = document.getElementById('focus-text');
const focusCheckbox = document.getElementById('focus-checkbox');
const focusInputContainer = document.getElementById('focus-input-container');



// to do list button
const buttonTask = document.getElementById('btn-todo');
const taskMenu = document.getElementById('task-menu');
const taskInput = document.getElementById('task-input');


const horizontalLine = document.getElementById('line');

const textAddTask = document.getElementById('task-input');
const buttonAddTask = document.getElementById('btn-add-task');
console.log(buttonAddTask); 

function buttonToggle() {
    taskMenu.classList.toggle("hidden");
    const taskText = document.querySelector('.task-text');
    const liChecker = taskMenu.querySelectorAll('li').length;
            if (liChecker === 0) {
                buttonAddTask.classList.remove('hidden');
                taskInput.classList.add('hidden');
                taskMenu.style.minHeight ='250px';
                console.log(liChecker);

            } else {
                buttonAddTask.classList.add('hidden');
                taskInput.classList.remove('hidden');
                taskText.classList.add('hidden');
                console.log(`${liChecker} else`);
            }
}
buttonTask.addEventListener('click', buttonToggle);



function addTask() {
    console.log(buttonAddTask); 
    buttonAddTask.classList.toggle('hidden');
    console.log(buttonAddTask); 
    textAddTask.classList.toggle('hidden');
    console.log(textAddTask);
    textAddTask.focus();
}
buttonAddTask.addEventListener('click', addTask);

// end to do list button

// add list after enter

// <li class = 'task-container'>            
/*  <label class="checkbox-container" >
        <input class="checkbox" checked='' type="checkbox">
        <span class="checkmark"></ span>
        <span id='text'></span> 
        <button class='task-edit'>
            <i class="fa-solid fa-trash"></i>
        </button>
    /label>
   </li> */

function addList() {
    taskMenu.style.minHeight ='100px';
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const li = document.createElement('li');
        li.classList.add('task-container');

        const label = document.createElement('label');
        label.classList.add('checkbox-container');

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.classList.add('checkbox');

        const checkmark = document.createElement('span');
        checkmark.classList.add('checkmark');

        checkBox.addEventListener('change', () => {
            text.classList.toggle('completed');
        });
        
        const text = document.createElement('span');
        text.classList.add('text');
        text.textContent = taskValue;

        const editButton = document.createElement('button');
        editButton.classList.add('task-edit');
        editButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        
        const hr = document.createElement('hr');
        hr.classList.add('line');
        const taskText = document.querySelector('.task-text');
        taskText.classList.add('hidden');

        editButton.addEventListener('click', () => {
            li.remove();
            const liChecker = taskMenu.querySelectorAll('li').length;
            if (liChecker === 0) {
                taskText.classList.remove('hidden');
                buttonAddTask.classList.remove('hidden');
                taskInput.classList.add('hidden');
                taskMenu.style.minHeight ='250px';
                console.log(liChecker);

            } else {
                console.log(liChecker);
            }
        });
        
        label.appendChild(checkBox);
        label.appendChild(checkmark);
        label.appendChild(text);
        label.appendChild(editButton)
        li.appendChild(label);
        li.appendChild(hr);

        taskMenu.appendChild(li);


        taskMenu.insertBefore(li, taskInput);
        taskInput.value = '';

        console.log(li);
    }

}
taskInput.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter') {
        addList();
    }
});


// quotes

const quoteMenuButton = document.getElementById('quote-menu-button');
const quoteMenu = document.getElementById('quote-menu');


quoteMenuButton.addEventListener('click', () => {
    const quoteInput = document.getElementById('quote-input');
    quoteMenu.classList.toggle('hidden');
    if (quoteMenu.classList.contains('hidden')) {
        quoteMenuButton.classList.remove('active');
    } else {
        quoteMenuButton.classList.add('active');
    }
    quoteInput.focus();
});



const quotes = [
    {
        text: "You only fail when you stop trying",
        author: "Makunuochi Ippo"
    },
    {
        text: "Every challenge makes you stronger. You're growing, learning and evolving into the best version of yourself",
        author: "Anonymous"
    },
    { 
        text: "The future belongs to those who believe in the beauty of their dreams.", 
        author: "Eleanor Roosevelt" 
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams",
        author: "Hinata Shoyo"
    },
    {
        text: "Hardwork is worthless for those that don't believe in themselves",
        author: "Naruto Uzumaki"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "Malala Yousafzai"
    }   
];

function updateQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
}

const submitButton = document.getElementById('submit-button');
quoteMenu.addEventListener('submit', function(event) {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    
    const quoteInput = document.getElementById('quote-input');
    const authorInput = document.getElementById('author-input');

    event.preventDefault();
    
    quotes.push({
        text: `${quoteInput}`,
        author: `${authorInput}`
    })
    quoteElement.textContent = `"${quoteInput.value}"`;
    authorElement.textContent = `- ${authorInput.value}`;

    quoteMenu.classList.add('hidden');
});


function updateWeather() {
    const temperatureElement = document.getElementById('temperature');
    const locationElement = document.getElementById('location');
    temperatureElement.textContent = "31°C";
    locationElement.textContent = " Makati";
}




function doItAll() {
    updateTime();
    updateQuote();
    updateBackground();
    updateWeather();
    setInterval(updateWeather, 60* 60 *1000);
    setInterval(updateBackground,20 * 60 * 1000);
    setInterval(updateTime, 30 * 1000);
    setInterval(updateQuote, 10* 60 *1000);
}

doItAll();
