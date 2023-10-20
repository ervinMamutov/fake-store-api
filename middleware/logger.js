import chalk from 'chalk';

const logger = (req, res, next) => {
  const url = chalk.blue(req.url);
  const method = chalk.green(req.method);
  const status = chalk.yellow(req.status);
  console.log(`${url} --- ${method} --- ${status}`);
  next();
};

export default logger;
