
const http = require('http');
const { parse } = require('querystring');
let fs = require('fs');




const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body)
            //create a file named mynewfile3.txt:
            fs.writeFile('message.txt', body, function (err) {
              if (err) throw err;
              console.log('Saved!');
            });
            res.end('File Created');

        });
    } 
    else {
        res.end(`
            <!doctype html>
            <html>
            <body>
                <form action="/message" method="post">

                    <label>Enter your message here: </label><br><br/>
                    <input type="text" name="message" /><br/>
                   
                    <input type='submit' value="submit">
                </form>
            </body>
            </html>
        `);
    }
});
server.listen(8080);


