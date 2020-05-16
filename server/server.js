const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const dbConfig = require("./db.config.js");
const app = express();



// Парсинг json
app.use(bodyParser.json());

// Парсинг запросов по типу: application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Настройка CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, PUT, POST, DELETE, OPTIONS"
  );
  next();
});

// Создание соединения с базой данных
const connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  charset: 'utf8_general_ci',
  connectionLimit: 10
});
connection.getConnection((err, connect) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  } else {
    connect.query('SET NAMES "utf8"');
    connect.query('SET CHARACTER SET "utf8"');
    connect.query('SET SESSION collation_connection = "utf8_general_ci"');
    console.log("Успешно соединено с БД");
  }
  if (connect) connect.release();
});


//Обработка входа администратора
app.post("/api/login", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log('Пришёл POST запрос для входа:');
  console.log(req.body);
  connection.query(`SELECT * FROM admins WHERE (login="${req.body.login}") AND (password="${req.body.password}")`,
    function (err, results) {
      if (err) {
        res.status(500).send('Ошибка сервера при получении пользователя по логину')
        console.log(err);
      }
      console.log('Результаты проверки существования пользователя:');
      if (results !== undefined) {
        console.log(results[0]);
        if (results[0] === undefined) {
          res.json("not exist");
        } else {
          res.json(results);
        }
      }
    });
})

//Обработка получения списка услуг
app.get("/api/services", function (req, res) {
    try {
      connection.query("SELECT * FROM `services`", function (
        error,
        results,
        fields
      ) {
        if (error) {
          res.status(500).send("Ошибка сервера при получении услуг");
          console.log(error);
        }
        res.json(results);
      });
    } catch (error) {
      console.log(error);
    }
  });

  //Обработка получения списка косметологов
app.get("/api/beauticians", function (req, res) {
    try {
      connection.query("SELECT * FROM `beauticians`", function (
        error,
        results,
        fields
      ) {
        if (error) {
          res.status(500).send("Ошибка сервера при получении списка косметологов");
          console.log(error);
        }
        res.json(results);
      });
    } catch (error) {
      console.log(error);
    }
  });


// Обработка удаления услуги
app.delete("/api/delete/:id", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log('Пришёл DELETE запрос для удаления карточки услуги:');
  console.log(req.body);
  connection.query(`DELETE FROM services WHERE id=${req.params.id}`,
    function (err) {
      if (err) {
        res.status(500).send('Ошибка сервера при удалении карточки услуги по id')
        console.log(err);
      }
      console.log('Удаление прошло успешно');
      res.json("delete");
    });
})

// Обработка добавления нового клиента
app.post("/api/add", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log('Пришёл POST запрос для добавления нового клиента:');
  console.log(req.body);
  connection.query(`INSERT INTO clients ( name, sername, phone, email, login, password) VALUES (?, ?, ?, ?, ?, ?);`,
  [ req.body.name, req.body.sername, req.body.phone, req.body.email, req.body.login, req.body.password],
    function (err) {
      if (err) {
        res.status(500).send('Ошибка сервера при регистрации пользователя')
        console.log(err);
      }
      console.log('Создание прошло успешно');
      res.json("create");
    });
})

// Информирование о запуске сервера и его порте
app.listen(3001, () => {
  console.log("Сервер запущен на http://localhost:3001");
});
