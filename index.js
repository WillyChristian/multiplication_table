const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 2000;
const views = require('./src/routers/views');

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Middleweres
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', views);

app.listen(PORT, () =>
  console.log(`Acesse o servidor em: http://localhost:${PORT}`)
);
