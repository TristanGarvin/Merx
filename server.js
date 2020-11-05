const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');

const db = require('./models');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(session({ secret: 'abc123', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/html-routes')(app);
require('./routes/users-api-routes')(app);
require('./routes/runs-api-routes')(app);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Merx app started on port ${PORT}`)
    });
});