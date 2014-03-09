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
    },
    {
      "r": {
        "app.js": ["function magic(arr) {",
          "  return arr.length > 1 ? magic(arr.slice(1)) : arr[0];",
          "}",
          "console.log(magic([1,2,3,4,5,6]));"].join('<br/>')
      },
      "q": "node app.js",
      "a": [
        {"option": "1", "correct": false},
        {"option": "[]", "correct": false},
        {"option": "6", "correct": true},
        {"option": [1, 2, 3, 4, 5, 6], "correct": false}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span></p>"
    },
    {
      "r": {
        "app.js": ["function doge(wow) {",
          "  return function(very) {",
          "    return very.call(wow);",
          "  }",
          "}",

          "var such = { x: 2 };",
          "such.much = doge({ x: 1});",

          "console.log(such.much(function() {",
          "  return this.x;",
          "}))"].join('<br/>')
      },
      "q": "node app.js",
      "a": [
        {"option": "1", "correct": true},
        {"option": "2", "correct": false},
        {"option": "undefined", "correct": false}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span></p>"
    },
    {
      "r": {
        "app.js": ["function fizz(buzz, fizzbuzz) {",
          "   return this[buzz];",
          "}",
          "var fuzz = [3,2,1,0];",
          "console.log(fuzz.map(fizz.bind(fuzz)));"].join('<br/>')
      },
      "q": "node app.js",
      "a": [
        {"option": "[0,1,2,3]", "correct": true},
        {"option": "[3,2,1,0]", "correct": false},
        {"option": "[undefined, undefined, undefined, undefined]", "correct": false}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span></p>"
    },
    {
      "r": {
        "app.js": ["var obj = {",
          "  count: 0,",
          "  doCount: function(){",
          "    this.count++;",
          "  }",
          "};",

          "var Spy = function(klass,method){",
          "  var oldMethod = klass[method];",
          "  var result = { count: 0 };",
          "  klass[method] = function(){",
          "    result.count++;",
          "    return oldMethod.apply(this,arguments);",
          "  };",
          "  return result;",
          "};",
          "var spy = Spy(obj, 'doCount');",
          "obj.doCount();",
          "obj.doCount();",
          "obj.doCount();,",
          "console.log(obj.count)"].join('<br/>')
      },
      "q": "node app.js",
      "a": [
        {"option": "0", "correct": false},
        {"option": "undefined", "correct": false},
        {"option": "3", "correct": false},
        {"option": "6", "correct": false}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span></p>"
    },
    {
      "r": {
        "app.js": ["function map(arr, fn) {",
          "  return arr.reduce(function(acc, item, index, arr) {",
          "    return acc.concat(fn(item-1, index, arr))",
          "  }, [])",
          "}",

          "var o = map([1,3,5,7,11], function(val){",
          "  return val;",
          "});",

          "console.log(o);"].join('<br/>')
      },
      "q": "node app.js",
      "a": [
        {"option": "NaN", "correct": false},
        {"option": "[1, 3, 5, 7, 9]", "correct": false},
        {"option": "[0, 2, 4, 6, 10]", "correct": true},
        {"option": "27", "correct": false}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span></p>"
    },
    {
      "r": {
        "app.js": ["var slice = Function.call.bind(Array.prototype.slice);",
                   "function whoo() {",
                   "  console.log(slice(arguments));",
                   "}",
                   "whoo('such', 'workshop')"].join('<br/>')
      },
      "q": "node app.js",
      "a": [
        {"option": "['such']", "correct": false},
        {"option": "['workshop']", "correct": false},
        {"option": "[undefined, undefined]", "correct": false},
        {"option": "['such, 'workshop']", "correct": true}
      ],
      "correct": "<p><span>That's right!</span></p>",
      "incorrect": "<p><span>Uhh no.</span></p>"
    }
  ]
};
