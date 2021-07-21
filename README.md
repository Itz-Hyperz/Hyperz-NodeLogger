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

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | STRING  | The header, this is the top of the embed
| #2   | STRING  | The width of the header
| #3   | STRING  | The color of the ASCII text for the header (must work with npm chalk)
| #4   | STRING  | The body section of the logger, doesn't support color yet
| #5   | STRING  | The background color of the logger, can be a color HEX, or disable it by setting to "disabled"
| #6   | STRING  | The border around the logger box, can be a color hex
| #7   | STRING  | The [border style](##border-styles) around the logger module
| #8   | BOOLEAN  | Make the header border match the body border

---

## Border Styles

- single
- classic
- double
- round
- none

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