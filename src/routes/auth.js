import express from 'express';
import dotenv from 'dotenv';
import Joi from 'joi';
import nodemailer from 'nodemailer';
import User from '../models/user';
import { signUp, signIn } from '../validations/user';
import { parseError, generateAccessToken, authenticateJWT } from '../utilities/helpers';
dotenv.config();


const authRoutes = express.Router();

//Get all users
authRoutes.get('/users', authenticateJWT, async (req, res) => {
    try {
        const { admin } = req.user;
        if (admin !== 'Admin') return res.json({ 'status': 403, 'error': 'Forbidden' });
        const users = await User.find();
        const userData = users.filter(user => user.admin !== 'Admin')
        res.json({ 'status': 200, 'data': userData });
    } catch (err) {
        res.json({ 'status': 404, 'error': 'Users not found' });
    }
});

//Get one user by id
authRoutes.get('/users/:id', authenticateJWT, async (req, res) => {
    try {
        const { admin } = req.user;
        if (!admin) return res.json({ 'status': 403, 'error': 'Forbidden' });
        const { id } = req.params;
        let foundUser = await User.find({ _id: id }).populate('loan');
        res.json({ 'status': 200, 'data': foundUser });
    } catch (err) {
        res.json({ 'status': 404, 'error': 'User not found' });
    }
});

//Verify one user via their email
authRoutes.post('/users/:email/verify', authenticateJWT, async function (req, res) {
    try {
        const { admin, status } = req.user;
        if (admin !== 'User') return res.json({ 'status': 403, 'error': 'Forbidden' });
        if (status === 'Verified') return res.json({
            'status': 403,
            'error': 'Account already verified, signin'
        });
        const { email } = req.params;

        await User.findOneAndUpdate({ email }, { status: 'Verified' }, { new: true }, (err, updatedUser) => {
            if (err || updatedUser === null) {
                return res.json({ 'status': 404, 'error': 'User not found' })
            }
            req.updatedUser = updatedUser
            res.json({
                'status': 200,
                'data': {
                    id: req.updatedUser._id,
                    email: req.updatedUser.email,
                    firstName: req.updatedUser.firstName,
                    secondName: req.updatedUser.secondName,
                    status: req.updatedUser.status
                }
            });
        });

    } catch (err) {
        res.status(401).send(parseError(err));
    }
});

//Register a new user
authRoutes.post('/signup', async (req, res) => {
    try {
        const { firstName, secondName, username, email, password } = req.body;
        await Joi.validate({
            firstName,
            secondName,
            username,
            email,
            password
        }, signUp);
        const newUser = new User({
            firstName,
            secondName,
            username,
            email,
            password
        });
        const accessToken = generateAccessToken(newUser);
        await newUser.save();
        req.user = newUser;

        let transport = nodemailer.createTransport({
          host: process.env.EMAIL_HOST || "smtp.gmail.com",
          port: process.env.EMAIL_PORT || 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_SENDER || "alexvanellope@gmail.com",
            pass: process.env.EMAIL_SENDER_PASS || "Matesya1@#$",
          },
        });

        const message = {
            from: process.env.EMAIL_SENDER || "alexvanellope@gmail.com",
          to: email,
          subject: "Quick Credit",
          html: ` <div>
                        <h3>Hi ${firstName},</h3>
                        <p>Thank you for registering with us.</p>
                        <p>Click here <a href='https://quick-credit-webapp.herokuapp.com/verify'>https://quick-credit-webapp.herokuapp.com/verify</a> to verify your account.</p>
                        <p><b>Please NOTE: This link expires in 24hrs</b></p></br></br>
                        <p>Regards,</p>
                        <p><em>Admin</em></p>
                    </div>`, // Plain text body
        };

        transport.sendMail(message, function (err, info) {
            if (err) {
                console.log(err)
                //res.json({ 'error': 'There was a problem' });
            } else {
                console.log(info)
                //res.json({ 'data': 'Mail sent' + info });
            }
        });

        res.json({
            'status': 200,
            'data': {
                verificationToken: accessToken,
                email: req.user.email
            }
        });
    } catch (err) {
        res.json({ 'status': 400, 'error': parseError(err) });
    }
});

//Login into the application with email and password
authRoutes.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        await Joi.validate({ email, password }, signIn);

        const user = await User.findOne({ email }).populate('loan', 'status');
        if (user && user.comparePasswords(password)) {
            if (user.status !== 'Verified') {
                return res.json({ 'status': 403, 'error': 'Account not verified, check your mail' });
            }
            const accessToken = generateAccessToken(user);
            req.user = user;
            const { id, loan, username, firstName, secondName, status, email, admin } = req.user;
            res.json({
                'status': 200,
                'data': {
                    'token': accessToken,
                    'userId': id,
                    'loan': loan,
                    'status': status,
                    'username': username,
                    'firstName': firstName,
                    'secondName': secondName,
                    'email': email,
                    'admin': admin
                }
            });
        } else {
            res.json({ 'status': 401, 'error': 'Invalid credentials' });
        }
    } catch (err) {
        res.json({ 'status': 406, 'error': parseError(err) });
    }
});

export default authRoutes;