const express = require('express') //Пакет поднимает сервер и обрабатывает запросы
const mongoose = require('mongoose') //Пакет для работы с БД mongodb
const exphbs = require('express-handlebars') //Движок представлений (шаблонов)
const userRoutes = require('./routes/users')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  //настройка конфигурации для шаблонизатора
  defaultLayout: 'main',
  extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs') //используем по умолчанию handlebars
app.set('views', 'views')

app.use(userRoutes)

async function start() {
  try {
    // Подключаем базу
    await mongoose.connect(
      'mongodb+srv://sergey:1q2w3e@cluster0.suv9b.mongodb.net/usersn',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
      }
    )
    // Запускаем сервер
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start()
