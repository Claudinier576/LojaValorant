var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
const session = require('express-session')
var cookeiLogin = require('./middlewares/cookieLogin')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var skinsRouter = require('./routes/skins');
var contactRouter = require('./routes/contact');
var RegisterSkinRouter = require('./routes/RegisterSkin');
var EDITskinRouter = require('./routes/EDITskin');
var karRouter = require('./routes/kart');
var userControlRouter = require('./routes/userControl');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var loginNotifyRouter = require('./routes/loginNotify');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: '040c0f4bc43608ed3417823fa07b055621e05e1b247eea011fecc42d1a7401d4028f6b185caa289973dba08c984d1f405d5585703b900b423c4efb0ab1b02da708',
  resave: true,
  saveUninitialized: true
}));
app.use(cookeiLogin.verifyCookieLogins);



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/skins', skinsRouter);
app.use('/contact', contactRouter);
app.use('/ADDskin', RegisterSkinRouter);
app.use('/userControl', userControlRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/EDITskin', EDITskinRouter);
app.use('/kart', karRouter);
app.use('/loginNotify',loginNotifyRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
