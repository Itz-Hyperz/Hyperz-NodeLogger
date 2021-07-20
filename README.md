# Hyperz-NodeLogger
A node logger using multiple external npm modules to allow you to build your own stylish console logger.

---

## Support

* [Discord](https://disbot.top/d)

* [Website](https://support.hyperz.dev/)

---

## Installation

`npm i hyperz-nodelogger`

---

## Using The Logger

```js
const nodelogger = require('hyperz-nodelogger')

client.on("ready", () => {
    const logger = new nodelogger(`HDClient`, '500', `\n\nWhat a cool feature for a node module!`, '#1b98e0')
    logger.hypelogger()
});
```

---

What are the dependencies?

[Figlet](https://www.npmjs.com/package/figlet)
[Carden](https://www.npmjs.com/package/carden/v/3.0.0)
[Chalk](https://www.npmjs.com/package/chalk)

---

