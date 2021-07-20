// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001

const figlet = require('figlet')
const carden = require('carden')
const chalk  = require('chalk')

class hdlogger {

    async hypelogger(header, headerwidth, headerColor, body, borderColor, backgroundColor) {

        if(backgroundColor === 'disabled') {
            figlet.text(header, { width: `${headerwidth}`}, async function(err, head) {
                if (err) return console.log(err);
                
                let hcolor;
                if(headerColor === 'blue') {
                    hcolor = chalk.blue(head)
                } else if(headerColor === 'yellow') {
                    hcolor = chalk.yellow(head)
                } else if(headerColor === 'green') {
                    hcolor = chalk.green(head)
                } else if(headerColor === 'red') {
                    hcolor = chalk.red(head)
                } else if(headerColor === 'white') {
                    hcolor = chalk.white(head)
                } else if(headerColor === 'magenta') {
                    hcolor = chalk.magenta(head)
                } else if(headerColor === 'cyan') {
                    hcolor = chalk.cyan(head)
                } else {
                    return console.log(`Please use a valid chalk color entry for your ${chalk.blue(headerColor)} entry.`);
                }

                let frick = body
    
                let booter = carden(hcolor, frick, { margin: 1, content: { borderStyle: 'single', borderColor: borderColor, padding: 1}, header: { borderStyle: 'classic', padding: 1}})
                console.log(booter);
            });
        } else {
            figlet.text(header, { width: `${headerwidth}`}, async function(err, head) {
                if (err) return console.log(err);
                
                let hcolor;
                if(headerColor === 'blue') {
                    hcolor = chalk.blue(head)
                } else if(headerColor === 'yellow') {
                    hcolor = chalk.yellow(head)
                } else if(headerColor === 'green') {
                    hcolor = chalk.green(head)
                } else if(headerColor === 'red') {
                    hcolor = chalk.red(head)
                } else if(headerColor === 'white') {
                    hcolor = chalk.white(head)
                } else if(headerColor === 'magenta') {
                    hcolor = chalk.magenta(head)
                } else if(headerColor === 'cyan') {
                    hcolor = chalk.cyan(head)
                } else {
                    return console.log(`Please use a valid chalk color entry for your ${chalk.blue(headerColor)} entry.`);
                }

                let frick = body
    
                let booter = carden(hcolor, frick, { margin: 1, content: { borderStyle: 'single', borderColor: borderColor, backgroundColor: backgroundColor, padding: 1}, header: { borderStyle: 'classic', padding: 1}})
                console.log(booter);
            });
        }

    }

}

module.exports = hdlogger;

// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
