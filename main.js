const input = document.getElementById("taskInp");
const taskList = document.getElementById("taskList");


function AddTask(){
    if (input.value === ''){
        alert("Введите что нибудь!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML =  "\u00d7";
        li.appendChild(span);
    };
    input.value = "";
    saveData();
};

taskList.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
};

function showList(){
    taskList.innerHTML = localStorage.getItem("data");
};
showList();
