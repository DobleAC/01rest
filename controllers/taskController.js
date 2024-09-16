let task =[
    {id:1, title:"Tarea1", description:'Descripción de la tarea 1'},
    {id:2, title:"Tarea2", description:'Descripción de la tarea 2'},
    {id:3, title:"Tarea3", description:'Descripción de la tarea 3'}
];

function getAllTasks(){
    return task;
}

function createdTask(title, description){
    const newTask = {
        id: task.length + 1,
        title,
        description
    };
    task.push(newTask);
    return newTask;
}
//funcion para eliminar
/*
function deletedTask(id){
    const task = task[id-1];
   task = task.filter(task => task.id !== id);
   return task;
}
   */
// realizar la eliminación de un elemento y consulta de un elemento por ID
function deletedTask(id) {
    task.splice(id-1, 1);
    return tasks;  
}
function updatedTask(id, title, description) {
    task[id-1].title = title;
    task[id-1].description = description;
    return task[id];  
}


module.exports = {
    getAllTasks,
    createdTask,
    deletedTask,
    updatedTask
}