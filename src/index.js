document.addEventListener("DOMContentLoaded", () => {
  const task_button = document.querySelector('input[type="submit"]')


  task_button.addEventListener("click",function(e){
  	e.preventDefault();
  	console.dir(e);
  	const task_text = document.querySelector('input[type="text"]')
  	const textValue = task_text.value;
  	task_text.value = ""
		const taskList = document.querySelector('ul#tasks')
		const newTask = document.createElement('li')
		newTask.innerHTML = textValue
		taskList.append(newTask);
  });



});



// listen for a click on the submit button
// get the inputted text from the submit bar 
// clear the text field
// create new li within the ul that has the text 