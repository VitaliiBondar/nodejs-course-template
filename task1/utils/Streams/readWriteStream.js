const fs = require('fs');

function readStream(input) {
  if (fs.existsSync(input)) {
    return fs.createReadStream(input, 'utf8');
  } else if (!input) {
    process.stdout.write('Write some text\n');
    return process.stdin;
  }
  throw new Error('input file not found');
}
function writeStream(output) {
  if (fs.existsSync(output)) {
    return fs.createWriteStream(output, { flags: 'a' });
  } else if (!output) {
    return process.stdout;
  }
  throw new Error('output file not found');
}

module.exports = { readStream, writeStream };
