const { pipeline } = require('stream');

function runPipeline(readableStream, transform, writeableStream) {
  pipeline(readableStream, transform, writeableStream, err => {
    if (err) {
      throw new Error('Failed');
    }
  });
}

module.exports = { runPipeline };
