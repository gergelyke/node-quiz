// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Node.js basics - the tricky parts",
        "main":    "<h5>What will be the output of the following snippets?</h5>",
        "results": ""
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What number is the letter A in the English alphabet?",
            "a": [
                {"option": "8",      "correct": false},
                {"option": "14",     "correct": false},
                {"option": "1",      "correct": true},
                {"option": "23",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following best represents your preferred breakfast?",
            "a": [
                {"option": "Bacon and eggs",               "correct": false},
                {"option": "Fruit, oatmeal, and yogurt",   "correct": true},
                {"option": "Leftover pizza",               "correct": false},
                {"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        }
    ]
};
