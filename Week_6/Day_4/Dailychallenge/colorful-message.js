import chalk from 'chalk';

function showColorfulMessage() {
  console.log(chalk.green('✅ This is a green success message.'));
  console.log(chalk.blue.bgWhite.bold('🚀 Node.js is awesome!'));
  console.log(chalk.red('❌ This is a red error message.'));
}

export default showColorfulMessage;
