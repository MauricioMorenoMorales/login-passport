const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res, next) => {
	res.render('index')
})

router.get('/signup', (req, res, next) => {
	res.render('signup')
})

router.post(
	'/signup',
	passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		passReqToCallback: true,
	}),
	(req, res, next) => {
		res.render('signup')
	},
)

router.get('/login', (req, res, next) => {})

router.post('/login', (req, res, next) => {})

module.exports = router
