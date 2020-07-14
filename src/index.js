document.addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.querySelector('input#submit-button');
    const taskList = document.querySelector('ul#tasks');
    const deleteListButton = document.querySelector('input#delete-list-button');
    console.log(deleteListButton)

    deleteListButton.addEventListener("click", function(e) {
        e.preventDefault()
        taskList.innerHTML = ""
    })



    addTaskButton.addEventListener("click", function(e) {
        e.preventDefault();
        console.dir(e);
        const task_text = document.querySelector('input[type="text"]')
        const textValue = task_text.value;
        task_text.value = ""
        const newTask = document.createElement('li')
        newTask.innerHTML = textValue
        taskList.append(newTask);
    })

});

// delete button
// √make a button
// √add it somewhere
// add an event listenere
// delete the list