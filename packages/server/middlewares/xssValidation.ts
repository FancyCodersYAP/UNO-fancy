import { body } from 'express-validator';

export const xssValidator = () => body('*').escape();
