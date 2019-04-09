'use strict';

jest.mock('fs');

const app = require('../app.js');
const readit = reader.readit

describe('File Reader Module', () => {



  it('resolves when given a good file', () => {
    let file = 'file.txt';
    return expect(readit(file)).resolves.toEqual(new Buffer('File Contents'));
  });

  it('rejects when given a bad file', () => {
    let file = 'bad.txt';
    return expect(readit(file)).rejects.toEqual('Invalid File');
  });

});
