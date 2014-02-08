// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Node-quiz - Learn You The Node.js For Much Win",
        "main":    "<h3>Have you done <a href='http://nodeschool.io'>nodeschool</a>? Check what you have learnt.</h3>" +
          "<h5>What will be the output of the following snippets?</h5>",
        "results": ""
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "var a = [false]; <br/>" +
              "if ([false]) {  <br/>" +
              "  console.log(a == true);  <br/>" +
              "} else {  <br/>" +
              "  console.log('js');  <br/>" +
              "}",
            "a": [
                {"option": "true",      "correct": false},
                {"option": "false",     "correct": true},
                {"option": "'js'",      "correct": false},
                {"option": "other",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span>[false] as a boolean is considered true. Alas, when using it in the comparisons it gets converted in a different way and all goes to hell.</p>",
            "incorrect": "<p><span>Uhh no.</span>[false] as a boolean is considered true. Alas, when using it in the comparisons it gets converted in a different way and all goes to hell.</p>" // no comma here
        }
    ]
};
