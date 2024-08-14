import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const hashPassword = passoword => bcrypt.hashSync(passoword, 10);

export const comparePassword = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword);

export const generateToken = (payload, secret, expiresIn) => jwt.sign(payload, secret, { expiresIn });

export const validateFields = fields => fields.every(field => field !== undefined && field !== null && field !== '');
