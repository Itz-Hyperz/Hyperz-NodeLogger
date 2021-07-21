# Hyperz-NodeLogger
A node logger using multiple external npm modules to allow you to build your own stylish console logger.

---

## Support

* [Discord](https://hyperz.dev/discord)

* [Website](https://support.hyperz.dev/)

---

## Installation

`npm i hyperz-nodelogger`

---

## Using The Logger

The nodelogger function offers a fair amount of customization.

- Entry 1 - The header, this is the top of the embed. - **STRING**

- Entry 2 - The width of the header. - **STRING**

- Entry 3 - The color of the ASCII text for the header (must work with npm chalk). - **STRING**

- Entry 4 - The body section of the logger, doesn't support color yet. - **STRING**

- Entry 5 - The background color of the logger, can be a color HEX, or disable it by setting to "disabled" - **STRING**

- Entry 6 - The border around the logger box, can be a color hex. - **STRING**

- Entry 7 - The [border style](##border-styles) around the logger module. - **STRING**

- Entry 8 - Make the header border match the body border. - **BOOLEAN**

---

## Code Example

```js
const nodelogger = require('hyperz-nodelogger')

client.on("ready", () => {
    const logger = new nodelogger()
    // Entries: header, headerWidth, headerColor, body, backgroundColor, borderColor, borderStyle, fullBorders
    logger.hypelogger(`HDClient`, '500', 'green', `What a cool feature for a node module!\n\nPretty dank ngl`, 'disabled', 'green', 'single', false)
});
```

![](https://cdn.hyperz.dev/zqo6whvs.png)

---

## What are the dependencies?

[Figlet](https://www.npmjs.com/package/figlet)

[Carden](https://www.npmjs.com/package/carden/v/3.0.0)

[Chalk](https://www.npmjs.com/package/chalk)

---

## Border Styles

- single
- classic
- double
- round
- none

---
