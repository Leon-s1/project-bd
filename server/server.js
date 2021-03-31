const express = require('express') //фреймворк для разработке веб на node.js
const mongoose = require('mongoose') //библиотека для работы с БД mongodb
const config = require('config')
const addUser = require('./routes/addUser')
const PORT = config.get('serverPort')

const app = express() //создаем сервер

// app.use(express.json)

// app.engine('hbs', hbs.engine)
// app.set('view engine', 'hbs')
// app.set('views', 'views')

// app.use(addUser)

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
    require('./app/routes')(app, {})

    app.listen(PORT, () => {
      console.log('Server has been started on PORT', PORT)
    })
  } catch (e) {}

  module.exports = function (app, db) {
    app.post('/notes', (req, res) => {
      // Здесь будем создавать заметку.
      res.send('Hello')
    })
  }
}

start()
