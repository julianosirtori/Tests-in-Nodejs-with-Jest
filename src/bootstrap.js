const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NOV_ENV === 'test' ? '.env.test' : '.env',
});
