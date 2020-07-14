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
        const select = document.querySelector('select')
        newTask.className += select.value       
        taskList.append(newTask);
    })



});

// - A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)


// create priority class in css
// create dropdown 
// populate dropdown with priorities
// event listenier on select 
// assign priority class to a task
