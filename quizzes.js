const quizzes = [
    {
        id: "javascript-basics",
        title: "JavaScript Basics",
        icon: "fab fa-js-square",
        description: "Test your fundamental knowledge of JavaScript.",
        questions: [
            {
                questionText: "What keyword is used to declare a variable that cannot be reassigned?",
                options: ["let", "var", "const", "static"],
                correctAnswer: "const"
            },
            {
                questionText: "Which of the following is NOT a JavaScript data type?",
                options: ["String", "Boolean", "Number", "Character"],
                correctAnswer: "Character"
            },
            {
                questionText: "How do you write 'Hello World' in an alert box?",
                options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "console.log('Hello World');"],
                correctAnswer: "alert('Hello World');"
            },
            {
                questionText: "What is the correct way to write a JavaScript array?",
                options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = {red, green, blue}"],
                correctAnswer: "var colors = ['red', 'green', 'blue']"
            },
            {
                questionText: "How do you create a function in JavaScript?",
                options: ["function:myFunction()", "function = myFunction()", "function myFunction()", "create function myFunction()"],
                correctAnswer: "function myFunction()"
            }
        ]
    },
    {
        id: "html-fundamentals",
        title: "HTML Fundamentals",
        icon: "fab fa-html5",
        description: "Check your understanding of HTML structure and tags.",
        questions: [
            {
                questionText: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Textual Mark Language"],
                correctAnswer: "Hyper Text Markup Language"
            },
            {
                questionText: "Which HTML element is used to specify a footer for a document or section?",
                options: ["<bottom>", "<footer>", "<section-footer>", "<end>"],
                correctAnswer: "<footer>"
            },
            {
                questionText: "Which HTML tag is used to define an internal style sheet?",
                options: ["<script>", "<css>", "<style>", "<link>"],
                correctAnswer: "<style>"
            }
        ]
    },
    {
        id: "css-selectors",
        title: "CSS Selectors",
        icon: "fab fa-css3-alt",
        description: "How well do you know your CSS selectors?",
        questions: [
            {
                questionText: "Which selector targets an element with id 'header'?",
                options: [".header", "#header", "header", "*header"],
                correctAnswer: "#header"
            },
            {
                questionText: "Which selector targets all <p> elements inside a <div>?",
                options: ["div + p", "div p", "div > p", "div ~ p"],
                correctAnswer: "div p"
            }
        ]
    },
    // --- NEW QUIZZES START HERE ---
    {
        id: "python-fundamentals",
        title: "Python Fundamentals",
        icon: "fab fa-python",
        description: "Test your basic knowledge of Python syntax and concepts.",
        questions: [
            {
                questionText: "Which keyword is used to define a function in Python?",
                options: ["def", "function", "fun", "define"],
                correctAnswer: "def"
            },
            {
                questionText: "What is the correct way to create a list in Python?",
                options: ["list = (1, 2, 3)", "list = {1, 2, 3}", "list = [1, 2, 3]", "list = <1, 2, 3>"],
                correctAnswer: "list = [1, 2, 3]"
            },
            {
                questionText: "How do you write a single-line comment in Python?",
                options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
                correctAnswer: "# This is a comment"
            },
            {
                questionText: "Which of these is NOT a built-in data type in Python?",
                options: ["int", "float", "char", "str"],
                correctAnswer: "char"
            },
            {
                questionText: "What will `print(type(10.5))` output?",
                options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"],
                correctAnswer: "<class 'float'>"
            }
        ]
    },
    {
        id: "sql-basics",
        title: "SQL Basics",
        icon: "fas fa-database", // General database icon
        description: "Gauge your understanding of fundamental SQL commands.",
        questions: [
            {
                questionText: "What does SQL stand for?",
                options: ["Structured Query Language", "Strong Question Language", "Standard Query Language", "Sequential Query Language"],
                correctAnswer: "Structured Query Language"
            },
            {
                questionText: "Which SQL statement is used to extract data from a database?",
                options: ["GET", "OPEN", "SELECT", "EXTRACT"],
                correctAnswer: "SELECT"
            },
            {
                questionText: "Which SQL keyword is used to sort the result-set?",
                options: ["ORDER BY", "SORT BY", "ALIGN BY", "GROUP BY"],
                correctAnswer: "ORDER BY"
            },
            {
                questionText: "How do you insert new data into a database table?",
                options: ["ADD INTO", "INSERT INTO", "UPDATE TABLE", "NEW RECORD"],
                correctAnswer: "INSERT INTO"
            },
            {
                questionText: "Which clause is used to filter records?",
                options: ["FILTER", "WHERE", "CONDITION", "SELECTIF"],
                correctAnswer: "WHERE"
            }
        ]
    },
    {
        id: "mysql-concepts", // Could be more specific or stay general SQL
        title: "MySQL Concepts",
        icon: "fas fa-database", // Can use a more specific MySQL logo if you have one, or keep general
        description: "Understand key concepts and commands in MySQL.",
        questions: [
            {
                questionText: "Which command is used to create a new database in MySQL?",
                options: ["NEW DATABASE db_name;", "CREATE DATABASE db_name;", "MAKE DATABASE db_name;", "DATABASE db_name;"],
                correctAnswer: "CREATE DATABASE db_name;"
            },
            {
                questionText: "In MySQL, which data type is suitable for storing whole numbers?",
                options: ["VARCHAR", "FLOAT", "INT", "DATETIME"],
                correctAnswer: "INT"
            },
            {
                questionText: "What is the default port for MySQL Server?",
                options: ["8080", "5432", "3306", "1433"],
                correctAnswer: "3306"
            },
            {
                questionText: "Which statement is used to delete a table named 'Customers' from a MySQL database?",
                options: ["DELETE TABLE Customers;", "DROP TABLE Customers;", "REMOVE TABLE Customers;", "ERASE TABLE Customers;"],
                correctAnswer: "DROP TABLE Customers;"
            },
             {
                questionText: "The `AUTO_INCREMENT` attribute can be used with which data type in MySQL?",
                options: ["VARCHAR", "TEXT", "INTEGER", "DATE"],
                correctAnswer: "INTEGER"
            }
        ]
    },
    {
        id: "nodejs-basics",
        title: "Node.js Basics",
        icon: "fab fa-node-js",
        description: "Explore your knowledge of Node.js fundamentals.",
        questions: [
            {
                questionText: "Node.js is a __________.",
                options: ["JavaScript Framework", "JavaScript Library", "JavaScript Runtime Environment", "Database System"],
                correctAnswer: "JavaScript Runtime Environment"
            },
            {
                questionText: "Which of the following is used to import modules in Node.js?",
                options: ["include()", "require()", "import()", "getModule()"],
                correctAnswer: "require()"
            },
            {
                questionText: "What is NPM?",
                options: ["Node Project Manager", "Node Package Manager", "New Project Module", "Network Package Manager"],
                correctAnswer: "Node Package Manager"
            },
            {
                questionText: "Which core module in Node.js is used for working with the file system?",
                options: ["http", "url", "path", "fs"],
                correctAnswer: "fs"
            },
            {
                questionText: "Node.js is known for its _________ nature.",
                options: ["Synchronous", "Asynchronous", "Multi-threaded", "Sequential"],
                correctAnswer: "Asynchronous"
            }
        ]
    },
    {
        id: "mongodb-essentials",
        title: "MongoDB Essentials",
        icon: "fas fa-database", // Could try to find a specific MongoDB icon or keep general
        description: "Test your understanding of MongoDB concepts.",
        questions: [
            {
                questionText: "MongoDB is a _________ database.",
                options: ["Relational", "SQL", "Document", "Graph"],
                correctAnswer: "Document"
            },
            {
                questionText: "In MongoDB, a collection is analogous to a _________ in relational databases.",
                options: ["Row", "Column", "Table", "Schema"],
                correctAnswer: "Table"
            },
            {
                questionText: "What is the format of documents stored in MongoDB?",
                options: ["XML", "YAML", "BSON (Binary JSON)", "CSV"],
                correctAnswer: "BSON (Binary JSON)"
            },
            {
                questionText: "Which command is used to find documents in a MongoDB collection?",
                options: ["select()", "get()", "find()", "query()"],
                correctAnswer: "find()"
            },
            {
                questionText: "Every document in MongoDB must have an _________ field, which is unique within the collection.",
                options: ["id", "key", "_id", "primary_key"],
                correctAnswer: "_id"
            }
        ]
    }
    // --- NEW QUIZZES END HERE ---
];