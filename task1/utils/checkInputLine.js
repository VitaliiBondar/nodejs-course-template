const { programOptions } = require('./commander');

function checkInputLine() {
  if (!programOptions.shift) {
    throw new Error('You must use --shift or -s');
  }
  if (!programOptions.action) {
    throw new Error(
      'You must use some action -a decode/encode or --action encode/decode'
    );
  }
}

module.exports = { checkInputLine };
