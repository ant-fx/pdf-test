var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./input.html', 'utf8');

const options = {
  format: 'A3',
  base: `./`,
  border: {
    top: '1in',
    bottom: '1in',
  },
  timeout: 120000
};

pdf.create(html, options).toFile('./output.pdf', function(err, res) {
  if (err)
    return console.log(err);
  console.log(res);
});
