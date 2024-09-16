const express = require('express'); //importar express
const router = express.Router(); //crear objeto router
const taskController = require('../controllers/taskController');

router.get('/', (req, res)=>{
    const task = taskController.getAllTasks();
    res.status(200).json(task); //convierte el objeto en un json
});

router.post('/',(req, res) => { 
   const {title, description} = req.body;
   /*const title =req.body.title;
   const description = req.body.description;
   */ 
  const newTask=taskController.createdTask(title, description);
  res.status(200).json(newTask);//convierte el objeto en un json
});

router.delete('/:id', (req, res)=>{
    const {id} = req.body;
    const deletedTask = taskController.deletedTask(id);
    res.status(200).json(deletedTask);
});
////como mandarla a llamar en insomnia
//http://localhost:3000/task/1  //el 1 es el id del objeto                                          

router.put('/:id', (req, res)=>{
    const {id} = req.body;
    const {title, description} = req.body;
    const updatedTask = taskController.updatedTask(id, title, description);
    res.status(200).json(updatedTask);
});
module.exports = router;