### wat?

`process.stdout` in your browser.

### wai?

iono. cuz hakz.

### hau?

hacksy:
```js
process.stdout = require('browser-stdout')()

myStream.pipe(process.stdout)
```

or less hacksy:
```js
var BrowserStdout = require('browser-stdout')

myStream.pipe(BrowserStdout())
```

### opts
opts are passed directly to `stream.Writable`.
additionally, a label arg can be used to label console output.

```js
BrowserStdout({
  objectMode: true,
  label: 'dataz',
})
```