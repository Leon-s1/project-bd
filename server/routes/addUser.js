const { Router } = require('express')
const User = require('../models/User')
const router = Router()

router.get('/', async (req, res) => {
  const users = await User.find({})

  res.render('index', {
    title: 'Todos list',
    isIndex: true,
    todos,
  })
})

router.post('/create', async (req, res) => {
  try {
    const { firstName } = req.body
    const user = new User({
      firstName: req.body.firstName,
    })
    await user.save()
    return res.json({ message: 'User was created' })
  } catch (e) {
    console.log(e)
    res.send({ message: 'Server error' })
  }
})

module.exports = router
