const home = (req, res) => {
  const arrNumbersName = [
    'Dois',
    'Tres',
    'Quatro',
    'Cinco',
    'Seis',
    'Sete',
    'Oito',
    'Nove',
  ];
  res.render('home', {
    numbersList: arrNumbersName,
  });
};

const about = (req, res) => {
  res.render('about', {
    name: 'Jose',
  });
};

const mathTable = (req, res) => {
  const numToDoTable = req.params.num;
  const table = [];

  for (let i = 1; i <= 10; i++) {
    table.push(numToDoTable * i);
  }

  res.render('mathTable', {
    number: numToDoTable,
    table,
  });
};

module.exports = {
  about,
  home,
  mathTable,
};
