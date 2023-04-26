import express from 'express';
import { contactController } from '../index';

export const contactRouter = express.Router()

contactRouter.post('/contact', (req, res) => contactController.createContact(req, res))