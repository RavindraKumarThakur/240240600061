const UserData = require('../db/users.js');

async function createUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }
    await UserData.create({
        email,
        password
    }).then(() => {
        console.log('User created')
    }).catch((err) => {
        console.log(err)
    });
    return res.status(201).send('User registered successfully');
}

module.exports = { createUser };