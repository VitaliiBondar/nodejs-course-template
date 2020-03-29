const { readStream, writeStream } = require('./utils/Streams/readWriteStream');
const { transformStream } = require('./utils/Streams/transformStream');
const { programOptions } = require('./utils/commander');
const { checkInputLine } = require('./utils/checkInputLine');
const { runPipeline } = require('./utils/runPipeline');

checkInputLine();

const transform = transformStream(programOptions.shift, programOptions.action);

runPipeline(
  readStream(programOptions.input),
  transform,
  writeStream(programOptions.output)
);
