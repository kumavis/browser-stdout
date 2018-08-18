const { Writable } = require('stream')
const { inherits } = require('util')

const BrowserStdout = function (opts) {
  if (!(this instanceof BrowserStdout)) return new BrowserStdout(opts)

  opts = opts || {}

  Writable.call(this, opts)

  this.label = (typeof opts.label === 'undefined') ? 'stdout' : opts.label
}

BrowserStdout.prototype._write = function (chunks, encoding, cb) {
  const output = chunks.toString ? chunks.toString() : chunks

  if (this.label === false) {
    console.log(output)
  } else {
    console.log(this.label + ':', output)
  }

  process.nextTick(cb)
}

inherits(BrowserStdout, Writable)

module.exports = BrowserStdout
