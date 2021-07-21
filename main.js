// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001

const figlet = require('figlet')
const carden = require('carden')
const chalk  = require('chalk')

class hdlogger {

    constructor(header, headerWidth, headerColor, body, backgroundColor, borderColor, borderStyle, fullBorders) {
        this.header = header,
        this.headerWidth = headerWidth,
        this.headerColor = headerColor,
        this.body = body,
        this.backgroundColor = backgroundColor,
        this.borderColor = borderColor,
        this.borderStyle = borderStyle,
        this.fullBorders = fullBorders
    }

    async hypelogger(header, headerWidth, headerColor, body, backgroundColor, borderColor, borderStyle, fullBorders) {

        try {

            if(backgroundColor === 'disabled') {
                if(fullBorders) {
                    figlet.text(header, { width: `${headerWidth}`}, async function(err, head) {
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
            
                        let booter = carden(hcolor, frick, { margin: 1, content: { borderStyle: borderStyle, borderColor: borderColor, padding: 1}, header: { borderStyle: borderStyle, borderColor: borderColor, padding: 1}})
                        console.log(booter);
                    });
                } else {
                    figlet.text(header, { width: `${headerWidth}`}, async function(err, head) {
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
            
                        let booter = carden(hcolor, frick, { margin: 1, content: { borderStyle: borderStyle, borderColor: borderColor, padding: 1}, header: { borderStyle: borderStyle, padding: 1}})
                        console.log(booter);
                    });
                }
            } else {
                if(fullBorders) {
                    figlet.text(header, { width: `${headerWidth}`}, async function(err, head) {
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
            
                        let booter = carden(hcolor, frick, { margin: 1, content: { borderStyle: borderStyle, borderColor: borderColor, backgroundColor: backgroundColor, padding: 1}, header: { backgroundColor: backgroundColor, borderStyle: borderStyle, borderColor: borderColor, padding: 1}})
                        console.log(booter);
                    });
                } else {
                    figlet.text(header, { width: `${headerWidth}`}, async function(err, head) {
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
            
                        let booter = carden(hcolor, frick, { margin: 1, content: { borderStyle: borderStyle, borderColor: borderColor, backgroundColor: backgroundColor, padding: 1}, header: { backgroundColor: backgroundColor, borderStyle: borderStyle, padding: 1}})
                        console.log(booter);
                    });
                }
            }
        } catch(e) {
            console.log(chalk.red(`Something went wrong attempting to build your logger, ERROR:\n\n${chalk.white(`${e}\n\n`)}`));
        }
    }

}








module.exports = hdlogger;

// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
// CREATED BY HYPERZ DEVELOPMENT ++ Hyperz#0001
