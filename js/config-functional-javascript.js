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
        "app.js": ["var result = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {",
                   "  return a.concat(b.reverse());",
                   "});",
                  "console.log(result);"].join('<br/>')
      },
      "q": "node app.js",
      "a": [
        {"option": "[0, 1, 3, 2, 5, 4]", "correct": false},
        {"option": "[1, 0, 3, 2, 5, 4]", "correct": true},
        {"option": "[0, 1, 3, 2, 4, 5]", "correct": false}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span></p>"
    }
  ]
};
