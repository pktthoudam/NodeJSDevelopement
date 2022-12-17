import chalk from 'chalk';
import validator from "validator";


console.log(chalk.green('Hello world!'));
console.log(chalk.green.italic('Hello world!'));
console.log(chalk.green.inverse('Hello world!'));
console.log(chalk.green.inverse('Sucess'));
console.log(chalk.red.inverse('Fail'));

const val =   validator.isEmail('pktthoudam@bar.com');
console.log(val ? chalk.green.inverse(val) : chalk.red.inverse(val));