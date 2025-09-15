import express from 'express';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json());


import taskRouter from './Routes/task.route.js';
app.use('/api/v1/send-task', taskRouter)
app.use('/api/v1/get-task', taskRouter)
app.use('/api/v1/delete-task', taskRouter)
 export { app };