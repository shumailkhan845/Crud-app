import { Router } from 'express';
import { taskController } from '../Controllers/task.controller.js';
import { Task } from '../Models/task.model.js';
const router=Router();
//Router for sending data from frontend to backend
router.post('/', async (req, res)=>{
    await Task.create(req.body).then(
    task=>res.json(task)  
    ).catch(
        err=>res.json(err)
    )
})

//Router for getting data from backend to frontend
router.get('/', async (req, res)=>{
    try {
        const task = await Task.find();
        res.send(task);
    } catch (error) {
        res.status(500).json({"msg": "Server error"})
    }
})

//Router for deleting the tasks
router.delete('/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        console.log(id)
        await Task.findByIdAndDelete(id).then(
           res.status(200,{"msg": "task deleted successfully"})
        )} catch(error) {
            res.status(500,{"msg": "Server error"})
        }
})





export default router;