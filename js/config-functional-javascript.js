// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
  "info": {
    "name": "node-quiz - Functional Javascript",
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
    }
  ]
};
