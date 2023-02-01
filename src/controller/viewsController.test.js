const expect = require('chai').expect;
const sinon = require('sinon');
const { home, mathTable } = require('./viewsController');

// Mockup for the endpoinst
let res = {
  render: function () {},
};
let mock = sinon.mock(res);

describe('Unit tests for the views controller', function () {
  it('Test for home endpoint', () => {
    const secArgument = {
      numbersList: [
        'Dois',
        'Tres',
        'Quatro',
        'Cinco',
        'Seis',
        'Sete',
        'Oito',
        'Nove',
      ],
    };
    mock.expects('render').once().withArgs('home', secArgument);
    home({}, res);
  });

  it('Test mathTable endpoint', function () {
    const num = 2;
    const secArg = {
      number: num,
      table: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    };

    mock.expects('render').once().withArgs('mathTable', secArg);
    mathTable({ params: { num } }, res);
  });
});
