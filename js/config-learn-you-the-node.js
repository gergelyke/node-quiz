// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
  "info": {
    "name": "node-quiz - Learn You The Node.js For Much Win",
    "main": "<h5>What will be the output of the following snippets?</h5>",
    "results": ""
  },
  "questions": [
    {
      "r": {
        "app.js": ["console.log('nodebp')"].join('<br/>')
      },
      "q": "node app.js",
      "a": [
        {"option": "nodebp", "correct": true},
        {"option": "string", "correct": false},
        {"option": "undefined", "correct": false}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span>The correct one is: 'nodebp'</p>"
    },
    {
      "r": {
        "app.js": ["//app.js:",
          "var result = 0;",
          "for (var i = 2; i < process.argv.length; i++){",
          "   result += process.argv[i]",
          "}",
          "console.log(result)"].join('<br/>')
      },
      "q": ["node app.js 1 2 3"].join('<br/>'),
      "a": [
        {"option": undefined, "correct": false},
        {"option": "0123", "correct": true},
        {"option": 6, "correct": false},
        {"option": 123, "correct": false}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span> The correct one is: '0123', because the arguments will be processed as strings.</p>" // no comma here
    },
    {
      "r": {
        "app.js": ["var fs = require('fs');",
          "var val = fs.readFileSync('data.csv', 'utf8').split('\\n').length - 1",
          "console.log(val)"].join('<br/>'),
        "data.csv": ["node is fun",
          "much win",
          " "].join('<br/>')
      },
      "q": ["node app.js"].join('<br/>'),
      "a": [
        {"option": "node is fun", "correct": false},
        {"option": "much win", "correct": false},
        {"option": 2, "correct": true},
        {"option": 3, "correct": false}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span> It just splits the text on every new line, then get the length of this array.</p>" // no comma here
    },
    {
      "r": {
        "app.js": ["var dep = require('./dep');",
          "console.log(dep(3))"].join('<br/>'),
        "dep.js": ["module.exports = function (val) {",
          "  return val * 2;",
          "}"].join('<br/>')
      },
      "q": ["node app.js"].join('<br/>'),
      "a": [
        {"option": "3", "correct": false},
        {"option": "6", "correct": true},
        {"option": undefined, "correct": false}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span> Our dep module takes the parameter '3', multiplies it with two, then returns it.</p>" // no comma here
    },
    {
      "r": {
        "app.js": [
          "var http = require('http')",
          "http.get('http://nodebp.com', function (response) {",
          "  response.setEncoding('utf8')",
          "  response.on('data', console.log)",
          "  response.on('error', console.error)",
          "})"
        ].join('<br/>')
      },
      "q": ["node app.js"].join('<br/>'),
      "a": [
        {"option": "data", "correct": false},
        {"option": "error", "correct": false},
        {"option": "Content of nodebp.com", "correct": true},
        {"option": "Other", "correct": false}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span> http.get gets the content of the given url</p>"
    },
    {
      "r": {
        "server.js": [
          "var http = require('http');",
          "var app = require('./app');",
          "var port = 10000+Math.random()*10000|0;",
          "http.createServer(function (req, res) {",
          "  res.write(req.url.substring(1));",
          "  res.end();",
          "}).listen(port, app);"
        ].join('<br/>'),
        "app.js": [
          "var http = require('http');",
          "var bl = require('bl');",
          "var results = [];",
          "var count = 0;",
          "var port = 0;",
          "module.exports = function(){",
          "  port = this.address().port;",
          "  for (var i = 0; i < 3; i++)",
          "    httpGet(i)",
          "};",
          "function httpGet (index) {",
          "  http.get('http://localhost:'+port+'/'+ index, function (response) {",
          "    response.pipe(bl(function (err, data) {",
          "      if (err)",
          "        return console.error(data)",
          "      results[index] = data.toString()",
          "      count++",
          "      if (count == 3) // yay! we are the last one!",
          "        console.log(results)",
          "    }))",
          "  })",
          "}"
        ].join('<br/>')
      },
      "q": ["node server.js"].join('<br/>'),
      "a": [
        {"option": "[2, 1, 0]", "correct": false},
        {"option": "['0', '1', '2']", "correct": true},
        {"option": "1", "correct": false},
        {"option": "[0, 1, NaN]", "correct": false}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span> Our server returns the path without the '/', " +
        "while the app.js collects them, and prints them to the console</p>"
    }
  ]
};
