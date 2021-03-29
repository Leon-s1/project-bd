const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

const app = express()

async function start() {
  try {
    // Подключается база
    await mongoose.connect('', {
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    // Запускаем сервер
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start()
