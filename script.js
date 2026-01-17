const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = document.getElementById("taskInput").value;
    const taskDate = document.getElementById("taskDate").value;

    if (taskText === "") return;

    const li = document.createElement("li");

    const taskInfo = document.createElement("span");
    taskInfo.innerHTML = `<strong>${taskText}</strong><br><small>${taskDate}</small>`;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.onclick = () => li.classList.toggle("completed");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
        const newTask = prompt("Edit task", taskText);
        if (newTask) taskInfo.innerHTML = `<strong>${newTask}</strong><br><small>${taskDate}</small>`;
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => li.remove();

    actions.append(completeBtn, editBtn, deleteBtn);
    li.append(taskInfo, actions);
    taskList.appendChild(li);

    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
}
