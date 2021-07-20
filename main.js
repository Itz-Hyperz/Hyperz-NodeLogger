// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001

const figlet = require('figlet')
const carden = require('carden')
const chalk  = require('chalk')

class hdlogger {

    constructor(header, headerwidth, body, borderColor) {
        this.header = header,
        this.headerwidth = headerwidth,
        this.body = body,
        this.borderColor = borderColor
    }

    async hypelogger() {

        figlet.text(`${this.header}`, { width: `${this.headerwidth}`}, async function(err, head) {
            if (err) return console.log(err);
            
            let frick = this.body;

            let booter = carden(head, frick, { margin: 1, content: { borderStyle: 'single', borderColor: this.borderColor, padding: 1}, header: { borderStyle: 'classic', padding: 1}})
            console.log(booter);
        });

    }

}

module.exports = hdlogger;

// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001