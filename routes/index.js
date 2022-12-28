var express = require('express');
var router = express.Router();

/* Get home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Лоуренса */
router.get('/Lawrence', function(req, res, next) {
  res.send(<h1>Лоуренс</h1>);
});

/* Страница Холо */
router.get('/Holo', function(req, res, next) {
  res.send(<h1>Холо</h1>);
});

/* Страница Мьюри */
router.get('/Myuuri', function(req, res, next) {
  res.send(<h1>Мьюри</h1>);
});

module.exports = router;
