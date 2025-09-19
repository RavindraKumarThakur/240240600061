const express = require('express')
const { createUser } = require('../controller/user.contoller')

const userRouter = express.Router()

userRouter.post("/register",createUser)

module.exports = userRouter