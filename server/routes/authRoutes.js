const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const { userExists, getUserByUsername, createUser } = require('../db/users')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByUsername,
  createUser
})

module.exports = router

