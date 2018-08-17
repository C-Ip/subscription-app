const promise = require('bluebird');
const initOptions = {
  promiseLib: promise
};

const pgp  = require('pg-promise')(initOptions);

const db = {
  host:'localhost',
  post: 5432,
  database: 'practicedatabase',
  user: 'calvin',
  password: 'lop43ioa'
};

const connection = pgp(process.env.DATABASE_URL);

module.exports = connection;
