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
    };
    input.value = "";
};
