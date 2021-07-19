const messages = [
  {
  text: "Hi there!",
  user: "Amando",
  added: new Date()
  },
  {
  text: "Hello World!",
  user: "Charles",
  added: new Date()
  }
];

const { text } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Submit A New Post'});
});

router.post('/new', function(req, res, next) {
  messageText = req.body.messageText;
  messageUser = req.body.messageUser;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
});




module.exports = router;
