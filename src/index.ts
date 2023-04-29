import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { contactRouter } from './modules/contact/route/contact.route';
import { EmailService } from './modules/notification/service/impl/email/EmailService';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

const mailService = EmailService.getInstance();
mailService.createLocalConnection().then(r => {
  console.log("mail start")
});

app.use(cors({
  origin: '*'
}))
app.use(express.json())
app.use('/images', express.static('public'))
app.use(contactRouter)


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});