const stream = require('stream');
const { encrypt } = require('../encrypt');
function transformStream(shift, action) {
  return stream.Transform({
    transform(data, encoding, callback) {
      this.push(encrypt(shift, data.toString(), action.toString()));
      callback();
    }
  });
}
module.exports = { transformStream };
