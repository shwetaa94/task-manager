import express, { Request, Response } from 'express'
import cors from 'cors'
import { router } from './router';
const app = express();

app.use(cors());
app.use(express.json())


app.get('/', (req: Request,res:Response)=>{
    res.send('backend activated');
})

app.use('api/v1', router)

app.listen(8000,()=>{
    console.log("backend connected");
})