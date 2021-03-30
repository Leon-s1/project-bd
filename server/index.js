const express = require('express') //фреймворк для разработке веб на node.js
const mongoose = require('mongoose') //библиотека для работы с БД mongodb
const config = require('config')
const PORT = config.get('serverPort')

const app = express() //создаем сервер

const start = async () => {
  try {
    // Подключаем базу
    await mongoose.connect(
      config.get('dbUrl', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    )
    //Запускаем сервер
    app.listen(PORT, () => {
      console.log('Server has been started on PORT', PORT)
    })
  } catch (e) {}
}

start()
