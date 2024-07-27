import { Router } from "express";
import { createTask, deleteTask, getTasks, updateTask } from "../controller/task";

export const taskRouter = Router();

taskRouter.post('/tasks', createTask);

// Get all tasks
taskRouter.get('/tasks', getTasks);


// Update a task by ID
taskRouter.put('/tasks/:id', updateTask);

// Delete a task by ID
taskRouter.delete('/tasks/:id', deleteTask);