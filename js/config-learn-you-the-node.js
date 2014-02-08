// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "node-quiz - Learn You The Node.js For Much Win",
        "main": "<h5>What will be the output of the following snippets?</h5>",
        "results": ""
    },
    "questions": [
        {
            "q": "console.log('nodebp')",
            "a": [
                {"option": "nodebp",      "correct": true},
                {"option": "string",     "correct": false},
                {"option": "undefined",      "correct": false}
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>The correct one is: 'nodebp'</p>" // no comma here
        },
        {
          "q": ["//app.js:",
                "var result = 0;",
                "for (var i = 2; i < process.argv.length; i++){",
                "   result += process.argv[i]",
                "}",
                "console.log(result)",
                "//terminal:",
                "node app.js 1 2 3"].join('<br/>'),
          "a": [
            {"option": undefined,      "correct": false},
            {"option": "0123",     "correct": true},
            {"option": 6,      "correct": false},
            {"option": 123,      "correct": false}
          ],
          "correct": "<p><span>That's right!</span></p>",
          "incorrect": "<p><span>Uhh no.</span>The correct one is: '0123', because the arguments will be processed as strings.</p>" // no comma here
        },
        {
          "q": ["//app.js:",
            "var fs = require('fs');",
            "var val = fs.readFileSync('data.csv', 'utf8').split('\\n').length - 1",
            "console.log(val)",
            "//data.csv:",
            "node is fun",
            "much win",
            "//terminal:",
            "node app.js"].join('<br/>'),
          "a": [
            {"option": "node is fun",      "correct": false},
            {"option": "much win",     "correct": false},
            {"option": 2,      "correct": true},
            {"option": "other",      "correct": false}
          ],
          "correct": "<p><span>That's right!</span></p>",
          "incorrect": "<p><span>Uhh no.</span>It just splits the text on every new line, then get the length of this array.</p>" // no comma here
        }
    ]
};
