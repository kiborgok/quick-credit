import Joi from 'joi';

const firstName = Joi.string().alphanum().min(2).max(15).required();
const secondName = Joi.string().alphanum().min(2).max(15).required();
const username = Joi.string().alphanum().min(2).max(15).required();
const email = Joi.string().email().required();
const admin = Joi.string();
const status = Joi.string();
const repaymentAmount = Joi.number();
const amount = Joi.number();
const tenor = Joi.number();
const password = Joi.string();

export const signUp = Joi.object().keys({
    firstName,
    secondName,
    username,
    email,
    password,
    admin,
    status
});

export const signIn = Joi.object().keys({
    email,
    password
});

export const createLoan = Joi.object().keys({
    amount,
    tenor
});

export const repayLoan = Joi.object().keys({
    repaymentAmount
});