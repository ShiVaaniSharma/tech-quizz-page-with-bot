// quizzes.js
const quizzes = [
    // --- EXISTING QUIZZES (JavaScript, Python, SQL - with expanded questions from before) ---
    {
        id: "javascript-basics",
        title: "JavaScript Basics",
        icon: "fab fa-js-square",
        description: "Test your fundamental knowledge of JavaScript.",
        questions: [
            // (Your 30 JavaScript questions from the previous response go here)
            { questionText: "What keyword is used to declare a variable that cannot be reassigned?", options: ["let", "var", "const", "static"], correctAnswer: "const" },
            { questionText: "Which of the following is NOT a JavaScript data type?", options: ["String", "Boolean", "Number", "Character"], correctAnswer: "Character" },
            { questionText: "How do you write 'Hello World' in an alert box?", options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "console.log('Hello World');"], correctAnswer: "alert('Hello World');" },
            { questionText: "What is the correct way to write a JavaScript array?", options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = {red, green, blue}"], correctAnswer: "var colors = ['red', 'green', 'blue']" },
            { questionText: "How do you create a function in JavaScript?", options: ["function:myFunction()", "function = myFunction()", "function myFunction()", "create function myFunction()"], correctAnswer: "function myFunction()" },
            { questionText: "Which operator is used to assign a value to a variable?", options: ["*", "-", "=", "x"], correctAnswer: "=" },
            { questionText: "What will the following code return: Boolean(10 > 9)?", options: ["false", "true", "NaN", "undefined"], correctAnswer: "true" },
            { questionText: "How do you round the number 7.25, to the nearest integer?", options: ["Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)", "rnd(7.25)"], correctAnswer: "Math.round(7.25)" },
            { questionText: "Which event occurs when the user clicks on an HTML element?", options: ["onmouseclick", "onchange", "onmouseover", "onclick"], correctAnswer: "onclick" },
            { questionText: "How can you add a comment in JavaScript that spans multiple lines?", options: ["//This comment//", "<!--This comment-->", "/*This comment*/", "##This comment##"], correctAnswer: "/*This comment*/" },
            { questionText: "What is the purpose of the `this` keyword in JavaScript?", options: ["Refers to the current function", "Refers to the global object", "Refers to the object that is executing the current function", "Refers to the parent element"], correctAnswer: "Refers to the object that is executing the current function" },
            { questionText: "How do you find the number with the highest value of x and y?", options: ["Math.ceil(x, y)", "Math.max(x, y)", "top(x, y)", "Math.top(x, y)"], correctAnswer: "Math.max(x, y)" },
            { questionText: "What is JSON?", options: ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Oriented Network", "Java Server Open Network"], correctAnswer: "JavaScript Object Notation" },
            { questionText: "Which company developed JavaScript?", options: ["Microsoft", "Sun Microsystems", "Netscape", "Google"], correctAnswer: "Netscape" },
            { questionText: "What does `NaN` stand for?", options: ["Not a Number", "No Available Number", "Negative and Number", "Null and Negative"], correctAnswer: "Not a Number" },
            { questionText: "How do you declare a JavaScript variable that can be changed?", options: ["const", "var", "let", "Both var and let"], correctAnswer: "Both var and let" },
            { questionText: "What is a closure in JavaScript?", options: ["A way to close a browser window", "A function having access to its own scope, the outer function's scope, and the global scope", "A security feature", "A type of loop"], correctAnswer: "A function having access to its own scope, the outer function's scope, and the global scope" },
            { questionText: "Which method converts a JSON string to a JavaScript object?", options: ["JSON.stringify()", "JSON.toObject()", "JSON.parse()", "JSON.convert()"], correctAnswer: "JSON.parse()" },
            { questionText: "What is the 'strict mode' in JavaScript?", options: ["A mode for faster execution", "A restricted variant of JavaScript that catches common coding mistakes", "A mode for debugging only", "A mode for server-side JavaScript only"], correctAnswer: "A restricted variant of JavaScript that catches common coding mistakes" },
            { questionText: "How can you detect the client's browser name?", options: ["navigator.appName", "browser.name", "client.browser", "window.browser"], correctAnswer: "navigator.appName" },
            { questionText: "What is the difference between `==` and `===`?", options: ["No difference, they are interchangeable", "`==` compares values, `===` compares values and types", "`===` compares values, `==` compares values and types", "`==` is for numbers, `===` is for strings"], correctAnswer: "`==` compares values, `===` compares values and types" },
            { questionText: "What is an IIFE in JavaScript?", options: ["Internally Invoked Functional Element", "Immediately Invoked Function Expression", "Initial Inline Function Execution", "Inherited Invokable Form Element"], correctAnswer: "Immediately Invoked Function Expression" },
            { questionText: "How do you stop an interval timer in JavaScript?", options: ["clearInterval()", "stopInterval()", "deleteInterval()", "pauseInterval()"], correctAnswer: "clearInterval()" },
            { questionText: "What does the `Array.prototype.map()` method do?", options: ["Modifies the original array by applying a function to each element", "Creates a new array populated with the results of calling a provided function on every element", "Checks if any element in the array passes a test", "Combines all elements of an array into a single string"], correctAnswer: "Creates a new array populated with the results of calling a provided function on every element" },
            { questionText: "What is 'event bubbling'?", options: ["A type of JavaScript error", "The order in which event handlers are called when one element is nested inside another, and both have handlers for the same event", "A method for creating custom events", "A performance optimization technique"], correctAnswer: "The order in which event handlers are called when one element is nested inside another, and both have handlers for the same event" },
            { questionText: "How can you create an object in JavaScript?", options: ["Using `new Object()`, object literal, or a constructor function", "Only using `new Object()`", "Only using object literals", "Using the `createObject` keyword"], correctAnswer: "Using `new Object()`, object literal, or a constructor function" },
            { questionText: "What method is used to add an element to the end of an array?", options: ["array.add()", "array.push()", "array.append()", "array.insertEnd()"], correctAnswer: "array.push()" },
            { questionText: "What is the DOM?", options: ["Data Object Model", "Document Object Model", "Distributed Object Model", "Dynamic Object Manipulation"], correctAnswer: "Document Object Model" },
            { questionText: "Which keyword is used to define a class in ES6?", options: ["prototype", "class", "function", "object"], correctAnswer: "class" },
            { questionText: "What is a Promise in JavaScript?", options: ["A guarantee that a function will execute", "An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value", "A callback function", "A syntax for writing synchronous code"], correctAnswer: "An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value" }
        ]
    },
    {
        id: "python-fundamentals",
        title: "Python Fundamentals",
        icon: "fab fa-python",
        description: "Test your basic knowledge of Python syntax and concepts.",
        questions: [
            // (Your 30 Python questions from the previous response go here)
            { questionText: "Which keyword is used to define a function in Python?", options: ["def", "function", "fun", "define"], correctAnswer: "def" },
            { questionText: "What is the correct way to create a list in Python?", options: ["list = (1, 2, 3)", "list = {1, 2, 3}", "list = [1, 2, 3]", "list = <1, 2, 3>"], correctAnswer: "list = [1, 2, 3]" },
            { questionText: "How do you write a single-line comment in Python?", options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"], correctAnswer: "# This is a comment" },
            { questionText: "Which of these is NOT a built-in data type in Python?", options: ["int", "float", "char", "str"], correctAnswer: "char" },
            { questionText: "What will `print(type(10.5))` output?", options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"], correctAnswer: "<class 'float'>" },
            { questionText: "Which method can be used to remove any whitespace from both the beginning and the end of a string?", options: ["strip()", "trim()", "len()", "ptrim()"], correctAnswer: "strip()" },
            { questionText: "Which collection is ordered, changeable, and allows duplicate members?", options: ["Tuple", "Set", "Dictionary", "List"], correctAnswer: "List" },
            { questionText: "How do you start writing an if statement in Python?", options: ["if x > y then:", "if (x > y):", "if x > y:", "if x > y"], correctAnswer: "if x > y:" },
            { questionText: "What is the correct file extension for Python files?", options: [".pyt", ".pt", ".pyth", ".py"], correctAnswer: ".py" },
            { questionText: "How do you create a dictionary in Python?", options: ["{key: value}", "[key: value]", "(key: value)", "<key: value>"], correctAnswer: "{key: value}" },
            { questionText: "Which Python keyword is used for iteration over a sequence?", options: ["loop", "while", "for", "iterate"], correctAnswer: "for" },
            { questionText: "What does the `len()` function do in Python?", options: ["Returns the length of an object", "Converts to lowercase", "Checks if an item exists", "Returns the largest item"], correctAnswer: "Returns the length of an object" },
            { questionText: "How do you get the absolute value of a number in Python?", options: ["abs()", "absolute()", "val()", "value()"], correctAnswer: "abs()" },
            { questionText: "Which operator is used for exponentiation in Python?", options: ["^", "**", "%", "exp()"], correctAnswer: "**" },
            { questionText: "What is a module in Python?", options: ["A single Python script", "A file containing Python definitions and statements", "A collection of classes", "A built-in function"], correctAnswer: "A file containing Python definitions and statements" },
            { questionText: "How do you import a module named 'math'?", options: ["include math", "import math", "use math", "require math"], correctAnswer: "import math" },
            { questionText: "What is PIP in Python?", options: ["Python Internet Protocol", "Preferred Installer Program", "Python Installation Package", "A Python data type"], correctAnswer: "Preferred Installer Program" },
            { questionText: "Which of these is mutable in Python?", options: ["Tuple", "String", "List", "Integer"], correctAnswer: "List" },
            { questionText: "How do you define an empty set in Python?", options: ["{}", "set()", "[]", "()"], correctAnswer: "set()" },
            { questionText: "What is the output of `print('Hello' + 'World')`?", options: ["HelloWorld", "Hello World", "Error", "Hello+World"], correctAnswer: "HelloWorld" },
            { questionText: "What is list comprehension in Python?", options: ["A way to understand lists", "A concise way to create lists", "A method to compress lists", "A type of list error"], correctAnswer: "A concise way to create lists" },
            { questionText: "How do you handle exceptions in Python?", options: ["try...except", "attempt...catch", "test...handle", "check...error"], correctAnswer: "try...except" },
            { questionText: "What does the `pass` statement do in Python?", options: ["Exits the loop", "Skips the current iteration", "Acts as a placeholder, doing nothing", "Raises an exception"], correctAnswer: "Acts as a placeholder, doing nothing" },
            { questionText: "Which method is used to add an item to the end of a list?", options: ["add()", "insert()", "append()", "extend()"], correctAnswer: "append()" },
            { questionText: "What is `__init__` in a Python class?", options: ["A destructor", "A private method", "A constructor method", "A static method"], correctAnswer: "A constructor method" },
            { questionText: "How can you get user input in Python?", options: ["get()", "input()", "read()", "scan()"], correctAnswer: "input()" },
            { questionText: "Which keyword is used to create an anonymous function (lambda function)?", options: ["anon", "func", "lambda", "def anonymous"], correctAnswer: "lambda" },
            { questionText: "What is the difference between a list and a tuple?", options: ["Lists are mutable, tuples are immutable", "Tuples are mutable, lists are immutable", "They are the same", "Lists can only store numbers, tuples can store any type"], correctAnswer: "Lists are mutable, tuples are immutable" },
            { questionText: "How do you check if a key exists in a dictionary `my_dict`?", options: ["key in my_dict", "my_dict.haskey(key)", "exists(my_dict, key)", "my_dict.contains(key)"], correctAnswer: "key in my_dict" },
            { questionText: "What is the purpose of the `self` parameter in class methods?", options: ["It refers to the class itself", "It refers to the instance of the class", "It is optional and can be omitted", "It refers to a global variable"], correctAnswer: "It refers to the instance of the class" }
        ]
    },
    {
        id: "sql-basics",
        title: "SQL Basics",
        icon: "fas fa-database",
        description: "Gauge your understanding of fundamental SQL commands.",
        questions: [
            // (Your 30 SQL questions from the previous response go here)
            { questionText: "What does SQL stand for?", options: ["Structured Query Language", "Strong Question Language", "Standard Query Language", "Sequential Query Language"], correctAnswer: "Structured Query Language" },
            { questionText: "Which SQL statement is used to extract data from a database?", options: ["GET", "OPEN", "SELECT", "EXTRACT"], correctAnswer: "SELECT" },
            { questionText: "Which SQL keyword is used to sort the result-set?", options: ["ORDER BY", "SORT BY", "ALIGN BY", "GROUP BY"], correctAnswer: "ORDER BY" },
            { questionText: "How do you insert new data into a database table?", options: ["ADD INTO", "INSERT INTO", "UPDATE TABLE", "NEW RECORD"], correctAnswer: "INSERT INTO" },
            { questionText: "Which clause is used to filter records?", options: ["FILTER", "WHERE", "CONDITION", "SELECTIF"], correctAnswer: "WHERE" },
            { questionText: "Which SQL statement is used to delete data from a database?", options: ["REMOVE", "DELETE", "COLLAPSE", "ERASE"], correctAnswer: "DELETE" },
            { questionText: "With SQL, how do you select all the columns from a table named 'Persons'?", options: ["SELECT *.Persons", "SELECT ALL Persons", "SELECT [all] FROM Persons", "SELECT * FROM Persons"], correctAnswer: "SELECT * FROM Persons"},
            { questionText: "Which SQL function is used to count the number of rows in a query result?", options: ["COUNT()", "NUMBER()", "SUM()", "TOTAL()"], correctAnswer: "COUNT()"},
            { questionText: "Which SQL statement is used to update existing records in a table?", options: ["MODIFY", "UPDATE", "CHANGE", "SAVE"], correctAnswer: "UPDATE" },
            { questionText: "The `AS` keyword in SQL is used for what purpose?", options: ["To create a backup", "To filter results", "To specify an alias for a table or column", "To join tables"], correctAnswer: "To specify an alias for a table or column" },
            { questionText: "What is a Primary Key in SQL?", options: ["A key used for encryption", "A unique identifier for a record in a table", "A foreign key from another table", "Any column with an index"], correctAnswer: "A unique identifier for a record in a table" },
            { questionText: "What is a Foreign Key in SQL?", options: ["A key that is not from the current database", "A key used to link two tables together", "A temporary key", "A backup primary key"], correctAnswer: "A key used to link two tables together" },
            { questionText: "Which SQL clause is used to combine rows from two or more tables, based on a related column between them?", options: ["COMBINE", "MERGE", "JOIN", "UNION"], correctAnswer: "JOIN" },
            { questionText: "What does `NULL` represent in SQL?", options: ["Zero value", "An empty string", "A missing or unknown value", "A negative value"], correctAnswer: "A missing or unknown value" },
            { questionText: "Which type of JOIN returns all records from the left table, and the matched records from the right table?", options: ["INNER JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "LEFT JOIN"], correctAnswer: "LEFT JOIN" },
            { questionText: "Which SQL operator is used to search for a specific pattern in a column?", options: ["MATCH", "LIKE", "SEARCH", "PATTERN"], correctAnswer: "LIKE" },
            { questionText: "The `DISTINCT` keyword in a SELECT statement is used to:", options: ["Sort results alphabetically", "Return only unique values", "Limit the number of rows returned", "Filter results based on a condition"], correctAnswer: "Return only unique values" },
            { questionText: "How do you create a new table in SQL?", options: ["NEW TABLE table_name (...)", "CREATE TABLE table_name (...)", "MAKE TABLE table_name (...)", "TABLE table_name (...)"], correctAnswer: "CREATE TABLE table_name (...)" },
            { questionText: "What is the purpose of the `GROUP BY` clause?", options: ["To sort data", "To filter data", "To group rows that have the same values in specified columns into summary rows", "To join tables"], correctAnswer: "To group rows that have the same values in specified columns into summary rows" },
            { questionText: "Which clause is used with `GROUP BY` to filter groups based on a condition applied to aggregate functions?", options: ["WHERE", "FILTER", "HAVING", "CONDITION"], correctAnswer: "HAVING" },
            { questionText: "What is an SQL Index used for?", options: ["To uniquely identify rows", "To create relationships between tables", "To speed up the retrieval of rows by providing quick access paths to data", "To store large binary objects"], correctAnswer: "To speed up the retrieval of rows by providing quick access paths to data" },
            { questionText: "Which SQL statement is used to delete an entire table and its data?", options: ["DELETE TABLE table_name", "REMOVE TABLE table_name", "DROP TABLE table_name", "ERASE TABLE table_name"], correctAnswer: "DROP TABLE table_name" },
            { questionText: "What is the difference between `DELETE` and `TRUNCATE` statements?", options: ["No difference", "DELETE removes rows one by one and logs them, TRUNCATE removes all rows quickly and is not logged for rollback", "TRUNCATE removes specific rows, DELETE removes all", "DELETE is for tables, TRUNCATE is for databases"], correctAnswer: "DELETE removes rows one by one and logs them, TRUNCATE removes all rows quickly and is not logged for rollback" },
            { questionText: "Which SQL aggregate function returns the average value of a numeric column?", options: ["MEDIAN()", "AVERAGE()", "AVG()", "MEAN()"], correctAnswer: "AVG()" },
            { questionText: "The `UNION` operator is used to:", options: ["Combine the result-set of two or more SELECT statements (must have same number of columns and compatible data types)", "Join two tables", "Create a view", "Perform calculations"], correctAnswer: "Combine the result-set of two or more SELECT statements (must have same number of columns and compatible data types)" },
            { questionText: "What is a View in SQL?", options: ["A backup of a table", "A virtual table based on the result-set of an SQL statement", "A physical copy of a table", "A temporary table"], correctAnswer: "A virtual table based on the result-set of an SQL statement" },
            { questionText: "How can you add a new column `Email` to an existing table `Customers`?", options: ["ADD COLUMN Email TO Customers", "ALTER TABLE Customers ADD COLUMN Email VARCHAR(255)", "MODIFY TABLE Customers ADD Email VARCHAR(255)", "UPDATE TABLE Customers ADD Email"], correctAnswer: "ALTER TABLE Customers ADD COLUMN Email VARCHAR(255)" },
            { questionText: "Which SQL data type is suitable for storing text of variable length?", options: ["CHAR", "VARCHAR", "TEXT", "All of the above depending on length"], correctAnswer: "All of the above depending on length" },
            { questionText: "The `BETWEEN` operator selects values:", options: ["Greater than a certain value", "Less than a certain value", "Within a given range (inclusive)", "Exactly matching a value"], correctAnswer: "Within a given range (inclusive)" },
            { questionText: "What is a subquery (or nested query) in SQL?", options: ["A query that is embedded inside another SQL query", "A query that operates on a backup table", "A query saved for later use", "A query that uses only aggregate functions"], correctAnswer: "A query that is embedded inside another SQL query" }
        ]
    },
    {
        id: "html-fundamentals",
        title: "HTML Fundamentals",
        icon: "fab fa-html5",
        description: "Check your understanding of HTML structure and tags.",
        questions: [
            { questionText: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Textual Mark Language"], correctAnswer: "Hyper Text Markup Language" },
            { questionText: "Which HTML element is used for the largest heading?", options: ["<heading>", "<h6>", "<h1>", "<head>"], correctAnswer: "<h1>" },
            { questionText: "What is the correct HTML element for inserting a line break?", options: ["<lb>", "<br>", "<break>", "<linebreak>"], correctAnswer: "<br>" },
            { questionText: "What does the `alt` attribute in an `<img>` tag specify?", options: ["Alternative text for an image if it cannot be displayed", "The alignment of the image", "A link for the image", "The source of the image"], correctAnswer: "Alternative text for an image if it cannot be displayed" },
            { questionText: "Which HTML tag is used to define a hyperlink?", options: ["<link>", "<hyperlink>", "<a>", "<href>"], correctAnswer: "<a>" },
            { questionText: "How can you make a bulleted list?", options: ["<ol>", "<list>", "<dl>", "<ul>"], correctAnswer: "<ul>" },
            { questionText: "Which HTML element defines the title of a document (shown in browser tab)?", options: ["<head>", "<meta>", "<title>", "<body>"], correctAnswer: "<title>" },
            { questionText: "What is the purpose of the `<div>` tag?", options: ["To define a section or division in an HTML document", "To display text", "To create a hyperlink", "To add a video"], correctAnswer: "To define a section or division in an HTML document" },
            { questionText: "Which input type defines a checkbox?", options: ["type='check'", "type='button'", "type='checkbox'", "type='radio'"], correctAnswer: "type='checkbox'" },
            { questionText: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correctAnswer: "Cascading Style Sheets" }
            // ... Add 90+ more HTML questions
        ]
    },
    {
        id: "css-selectors",
        title: "CSS Selectors & Styling",
        icon: "fab fa-css3-alt",
        description: "How well do you know CSS selectors and properties?",
        questions: [
            { questionText: "Which selector targets an element with id 'header'?", options: [".header", "#header", "header", "*header"], correctAnswer: "#header" },
            { questionText: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], correctAnswer: "font-size" },
            { questionText: "How do you make text bold in CSS?", options: ["font-style: bold;", "text-weight: bold;", "font-weight: bold;", "style: bold;"], correctAnswer: "font-weight: bold;" },
            { questionText: "Which property is used to change the background color of an element?", options: ["color", "bgcolor", "background-color", "background"], correctAnswer: "background-color" },
            { questionText: "How do you select all `<p>` elements that are children of a `<div>` element?", options: ["div p", "div > p", "div + p", "div ~ p"], correctAnswer: "div > p" },
            { questionText: "What is the default value of the `position` property?", options: ["static", "relative", "absolute", "fixed"], correctAnswer: "static" },
            { questionText: "How do you add a comment in a CSS file?", options: ["// this is a comment", "/* this is a comment */", "<!-- this is a comment -->", "# this is a comment"], correctAnswer: "/* this is a comment */" },
            { questionText: "Which CSS property is used to create space around an element, outside of any defined borders?", options: ["padding", "border-spacing", "margin", "outline"], correctAnswer: "margin" },
            { questionText: "What does the `z-index` property control?", options: ["The zoom level of an element", "The order of stacked elements (higher value is on top)", "The text alignment", "The element's opacity"], correctAnswer: "The order of stacked elements (higher value is on top)" },
            { questionText: "How can you apply a style to an element only when the mouse pointer is over it?", options: [":hover", ":focus", ":active", ":mouseover"], correctAnswer: ":hover" }
            // ... Add 90+ more CSS questions
        ]
    },
    {
        id: "mysql-concepts",
        title: "MySQL Concepts",
        icon: "fas fa-database",
        description: "Understand key concepts and commands in MySQL.",
        questions: [
            { questionText: "Which command is used to create a new database in MySQL?", options: ["NEW DATABASE db_name;", "CREATE DATABASE db_name;", "MAKE DATABASE db_name;", "DATABASE db_name;"], correctAnswer: "CREATE DATABASE db_name;" },
            { questionText: "In MySQL, which data type is suitable for storing whole numbers?", options: ["VARCHAR", "FLOAT", "INT", "DATETIME"], correctAnswer: "INT" },
            { questionText: "What is the default port for MySQL Server?", options: ["8080", "5432", "3306", "1433"], correctAnswer: "3306" },
            { questionText: "Which statement is used to delete a table named 'Customers' from a MySQL database?", options: ["DELETE TABLE Customers;", "DROP TABLE Customers;", "REMOVE TABLE Customers;", "ERASE TABLE Customers;"], correctAnswer: "DROP TABLE Customers;" },
            { questionText: "The `AUTO_INCREMENT` attribute in MySQL is used to:", options: ["Automatically encrypt data", "Automatically generate a unique number for new records", "Automatically create backups", "Automatically index the column"], correctAnswer: "Automatically generate a unique number for new records" },
            { questionText: "How do you show all tables in the current MySQL database?", options: ["LIST TABLES;", "SHOW ALL TABLES;", "DISPLAY TABLES;", "SHOW TABLES;"], correctAnswer: "SHOW TABLES;" },
            { questionText: "What is the purpose of the `USE` statement in MySQL?", options: ["To create a new user", "To select a database to work with", "To use a specific storage engine", "To import data"], correctAnswer: "To select a database to work with" },
            { questionText: "Which MySQL function is used to get the current date and time?", options: ["GETDATE()", "CURRENT_TIMESTAMP()", "NOW()", "SYSDATE()"], correctAnswer: "NOW()" },
            { questionText: "What is a common storage engine used in MySQL that supports transactions and foreign keys?", options: ["MyISAM", "MEMORY", "InnoDB", "CSV"], correctAnswer: "InnoDB" },
            { questionText: "How do you add an index named `idx_lastname` on the `LastName` column of the `Persons` table?", options: ["CREATE INDEX idx_lastname ON Persons (LastName);", "ADD INDEX idx_lastname FOR Persons (LastName);", "INDEX idx_lastname ON Persons.LastName;", "ALTER TABLE Persons ADD INDEX idx_lastname (LastName);"], correctAnswer: "CREATE INDEX idx_lastname ON Persons (LastName);" }
            // ... Add 90+ more MySQL questions
        ]
    },
    {
        id: "nodejs-basics",
        title: "Node.js Basics",
        icon: "fab fa-node-js",
        description: "Explore your knowledge of Node.js fundamentals.",
        questions: [
            { questionText: "Node.js is a __________.", options: ["JavaScript Framework", "JavaScript Library", "JavaScript Runtime Environment", "Database System"], correctAnswer: "JavaScript Runtime Environment" },
            { questionText: "Which of the following is used to import modules in Node.js CommonJS syntax?", options: ["include()", "require()", "import()", "getModule()"], correctAnswer: "require()" },
            { questionText: "What is NPM?", options: ["Node Project Manager", "Node Package Manager", "New Project Module", "Network Package Manager"], correctAnswer: "Node Package Manager" },
            { questionText: "Which core module in Node.js is used for working with the file system?", options: ["http", "url", "path", "fs"], correctAnswer: "fs" },
            { questionText: "Node.js is known for its _________ nature.", options: ["Synchronous", "Asynchronous", "Multi-threaded (by default)", "Sequential"], correctAnswer: "Asynchronous" },
            { questionText: "What file is commonly used to list project dependencies for an NPM project?", options: ["dependencies.json", "npm.config", "package.json", "project.xml"], correctAnswer: "package.json" },
            { questionText: "The `http` module in Node.js can be used to create a __________.", options: ["Database connection", "Web server", "Desktop application", "File compressor"], correctAnswer: "Web server"},
            { questionText: "What does REPL stand for in the context of Node.js?", options: ["Read-Execute-Print-Loop", "Run-Evaluate-Process-Link", "Read-Eval-Print-Loop", "Realtime-Execution-Programming-Language"], correctAnswer: "Read-Eval-Print-Loop"},
            { questionText: "What is the global object in Node.js?", options: ["window", "document", "global", "process"], correctAnswer: "global" },
            { questionText: "Which method of the `fs` module is used to read a file asynchronously?", options: ["fs.read()", "fs.readFile()", "fs.readFileSync()", "fs.openFile()"], correctAnswer: "fs.readFile()" }
            // ... Add 90+ more Node.js questions
        ]
    },
    {
        id: "mongodb-essentials",
        title: "MongoDB Essentials",
        icon: "fas fa-leaf",
        description: "Test your understanding of MongoDB concepts.",
        questions: [
            { questionText: "MongoDB is a _________ database.", options: ["Relational", "SQL", "Document", "Graph"], correctAnswer: "Document" },
            { questionText: "In MongoDB, a collection is analogous to a _________ in relational databases.", options: ["Row", "Column", "Table", "Schema"], correctAnswer: "Table" },
            { questionText: "What is the format of documents stored in MongoDB?", options: ["XML", "YAML", "BSON (Binary JSON)", "CSV"], correctAnswer: "BSON (Binary JSON)" },
            { questionText: "Which command is used to find documents in a MongoDB collection?", options: ["select()", "get()", "find()", "query()"], correctAnswer: "find()" },
            { questionText: "Every document in MongoDB must have an _________ field, which is unique within the collection.", options: ["id", "key", "_id", "primary_key"], correctAnswer: "_id" },
            { questionText: "Which method is used to insert a single document into a MongoDB collection?", options: ["insert()", "insertOne()", "addDoc()", "save()"], correctAnswer: "insertOne()" },
            { questionText: "MongoDB query language is based on _________.", options: ["SQL", "JSON-like objects", "XML", "Proprietary script"], correctAnswer: "JSON-like objects"},
            { questionText: "What is sharding in MongoDB?", options: ["Encrypting data", "Distributing data across multiple machines", "Creating backups", "Indexing documents"], correctAnswer: "Distributing data across multiple machines"},
            { questionText: "Which command is used to create a new collection in MongoDB?", options: ["db.create('mycollection')", "db.newCollection('mycollection')", "db.createCollection('mycollection')", "db.makeCollection('mycollection')"], correctAnswer: "db.createCollection('mycollection')" },
            { questionText: "In MongoDB, what is an index used for?", options: ["To store binary data", "To improve query performance", "To define relationships between collections", "To validate document structure"], correctAnswer: "To improve query performance" }
            // ... Add 90+ more MongoDB questions
        ]
    },

    // --- NEW QUIZZES START HERE ---
    {
        id: "git-github",
        title: "Git & GitHub",
        icon: "fab fa-git-alt", // You might need to ensure Font Awesome includes this icon
        description: "Test your knowledge of version control with Git and GitHub.",
        questions: [
            { questionText: "What is Git?", options: ["A cloud storage service", "A distributed version control system", "A project management tool", "A code editor"], correctAnswer: "A distributed version control system" },
            { questionText: "Which command initializes a new Git repository?", options: ["git start", "git new", "git init", "git create"], correctAnswer: "git init" },
            { questionText: "What does `git clone` do?", options: ["Creates a new branch", "Copies a remote repository to your local machine", "Deletes a repository", "Merges branches"], correctAnswer: "Copies a remote repository to your local machine" },
            { questionText: "Which command is used to stage changes for a commit?", options: ["git commit", "git stage", "git add", "git push"], correctAnswer: "git add" },
            { questionText: "What is a 'commit' in Git?", options: ["A connection to a remote server", "A snapshot of your project at a specific point in time", "A new branch", "A merge conflict"], correctAnswer: "A snapshot of your project at a specific point in time" },
            { questionText: "What is GitHub?", options: ["A type of Git command", "A local version control system", "A web-based hosting service for Git repositories", "A programming language"], correctAnswer: "A web-based hosting service for Git repositories" },
            { questionText: "What is a 'pull request' on GitHub?", options: ["A request to download files", "A way to propose changes to a repository", "A notification of a new commit", "A backup of the repository"], correctAnswer: "A way to propose changes to a repository" },
            { questionText: "Which command shows the status of your working directory and staging area?", options: ["git log", "git diff", "git status", "git show"], correctAnswer: "git status" },
            { questionText: "What is a 'branch' in Git?", options: ["The main version of the code", "A separate line of development", "A backup copy", "A specific commit"], correctAnswer: "A separate line of development" },
            { questionText: "How do you switch to an existing branch named `feature-xyz`?", options: ["git branch feature-xyz", "git switch feature-xyz", "git go feature-xyz", "git move feature-xyz"], correctAnswer: "git switch feature-xyz" } // or git checkout
            // ... Add 90+ more Git/GitHub questions
        ]
    },
    {
        id: "docker-basics",
        title: "Docker Basics",
        icon: "fab fa-docker",
        description: "Understand the fundamentals of containerization with Docker.",
        questions: [
            { questionText: "What is Docker?", options: ["A virtual machine", "A containerization platform", "A cloud provider", "A programming language"], correctAnswer: "A containerization platform" },
            { questionText: "What is a Docker Image?", options: ["A running instance of a container", "A lightweight, standalone, executable package that includes everything needed to run a piece of software", "A configuration file", "A network driver"], correctAnswer: "A lightweight, standalone, executable package that includes everything needed to run a piece of software" },
            { questionText: "What is a Docker Container?", options: ["A template for creating an environment", "A running instance of a Docker image", "A storage volume", "A build script"], correctAnswer: "A running instance of a Docker image" },
            { questionText: "What is the name of the file used to build a Docker image?", options: ["Dockerbuild", "Dockerfile", "Buildfile", "Containerfile"], correctAnswer: "Dockerfile" },
            { questionText: "Which command is used to build an image from a Dockerfile?", options: ["docker create", "docker run", "docker build", "docker make"], correctAnswer: "docker build" },
            { questionText: "Which command lists all running Docker containers?", options: ["docker list", "docker images", "docker ps", "docker show containers"], correctAnswer: "docker ps" },
            { questionText: "What is Docker Hub?", options: ["A local Docker registry", "A command-line tool", "A cloud-based registry service for finding and sharing container images", "A Docker networking feature"], correctAnswer: "A cloud-based registry service for finding and sharing container images" },
            { questionText: "How do you pull an image (e.g., 'ubuntu') from Docker Hub?", options: ["docker get ubuntu", "docker fetch ubuntu", "docker pull ubuntu", "docker download ubuntu"], correctAnswer: "docker pull ubuntu" },
            { questionText: "What is the primary benefit of using containers over traditional VMs for many applications?", options: ["Better hardware isolation", "Ability to run different operating systems", "Faster startup times and lower resource overhead", "Stronger security by default"], correctAnswer: "Faster startup times and lower resource overhead" },
            { questionText: "Which command is used to run a command inside an already running container?", options: ["docker run <container_id> <command>", "docker attach <container_id> <command>", "docker exec <container_id> <command>", "docker inside <container_id> <command>"], correctAnswer: "docker exec <container_id> <command>" }
            // ... Add 90+ more Docker questions
        ]
    },
    {
        id: "react-js",
        title: "React.js Fundamentals",
        icon: "fab fa-react",
        description: "Test your knowledge of the React JavaScript library.",
        questions: [
            { questionText: "React is a JavaScript library for building __________.", options: ["User interfaces", "Mobile applications", "Databases", "Servers"], correctAnswer: "User interfaces" },
            { questionText: "What is JSX?", options: ["A templating engine for JavaScript", "A syntax extension for JavaScript, allowing HTML-like code", "A state management library", "A CSS preprocessor"], correctAnswer: "A syntax extension for JavaScript, allowing HTML-like code" },
            { questionText: "What is a 'component' in React?", options: ["A CSS style rule", "A JavaScript function or class that optionally accepts inputs (props) and returns a React element", "A global state object", "An event handler"], correctAnswer: "A JavaScript function or class that optionally accepts inputs (props) and returns a React element" },
            { questionText: "What are 'props' in React?", options: ["Internal state of a component", "Event listeners", "Inputs passed to components, similar to function arguments", "CSS class names"], correctAnswer: "Inputs passed to components, similar to function arguments" },
            { questionText: "What is 'state' in a React component?", options: ["The component's visual appearance", "Data that the component maintains and can change over time, triggering re-renders", "A list of child components", "External data fetched from an API"], correctAnswer: "Data that the component maintains and can change over time, triggering re-renders" },
            { questionText: "Which lifecycle method is called after a component is rendered for the first time?", options: ["componentWillMount", "render", "componentDidMount", "componentDidUpdate"], correctAnswer: "componentDidMount" },
            { questionText: "How do you handle events in React?", options: ["Using `addEventListener` directly on DOM elements", "Using inline HTML event attributes like `onclick`", "Using camelCase event handlers like `onClick` directly on JSX elements", "Events are handled automatically"], correctAnswer: "Using camelCase event handlers like `onClick` directly on JSX elements" },
            { questionText: "What is the Virtual DOM?", options: ["A direct representation of the browser's DOM", "A lightweight in-memory representation of the real DOM used by React for performance optimization", "A server-side DOM", "A security feature"], correctAnswer: "A lightweight in-memory representation of the real DOM used by React for performance optimization" },
            { questionText: "What is a common way to manage application-wide state in larger React applications?", options: ["Using only local component state", "Storing everything in `window` object", "Using libraries like Redux or Zustand, or React's Context API", "Directly manipulating the DOM"], correctAnswer: "Using libraries like Redux or Zustand, or React's Context API" },
            { questionText: "What does `key` prop do in a list of React elements?", options: ["It's used for styling", "It helps React identify which items have changed, are added, or are removed, for efficient updates", "It sets the primary key for database interaction", "It's a unique ID for global access"], correctAnswer: "It helps React identify which items have changed, are added, or are removed, for efficient updates" }
            // ... Add 90+ more React questions
        ]
    },
    {
        id: "angular-basics",
        title: "Angular Basics",
        icon: "fab fa-angular",
        description: "Explore fundamental concepts of the Angular framework.",
        questions: [
            { questionText: "Angular is a platform and framework for building __________.", options: ["Mobile apps only", "Single-page client applications using HTML and TypeScript/JavaScript", "Backend APIs", "Desktop applications"], correctAnswer: "Single-page client applications using HTML and TypeScript/JavaScript" },
            { questionText: "What is a 'component' in Angular?", options: ["A service for data fetching", "The basic building block of an Angular application, controlling a patch of screen called a view", "A CSS file", "A configuration object"], correctAnswer: "The basic building block of an Angular application, controlling a patch of screen called a view" },
            { questionText: "Which language is primarily used for developing Angular applications?", options: ["Java", "Python", "TypeScript", "C#"], correctAnswer: "TypeScript" },
            { questionText: "What is a 'module' (NgModule) in Angular?", options: ["A JavaScript file", "A way to organize components, directives, pipes, and services into cohesive blocks of functionality", "A UI element", "A CSS stylesheet"], correctAnswer: "A way to organize components, directives, pipes, and services into cohesive blocks of functionality" },
            { questionText: "What is 'data binding' in Angular?", options: ["Connecting to a database", "The process of establishing a connection between the application's UI and its data", "Encrypting data", "A type of loop"], correctAnswer: "The process of establishing a connection between the application's UI and its data" },
            { questionText: "What is an example of one-way data binding in Angular?", options: ["[(ngModel)]", "{{ value }} (Interpolation)", "(click)='doSomething()'", "Both Interpolation and (click)"], correctAnswer: "{{ value }} (Interpolation)" },
            { questionText: "What is a 'service' in Angular?", options: ["A UI component", "A class with a narrow, well-defined purpose, typically used for sharing data or logic across components", "A CSS animation", "A router configuration"], correctAnswer: "A class with a narrow, well-defined purpose, typically used for sharing data or logic across components" },
            { questionText: "What is a 'directive' in Angular?", options: ["A type of component", "Instructions in the DOM, which can change the appearance or behavior of DOM elements", "A data model", "A configuration file"], correctAnswer: "Instructions in the DOM, which can change the appearance or behavior of DOM elements" },
            { questionText: "What does CLI stand for in Angular CLI?", options: ["Common Language Interface", "Component Library Interface", "Command Line Interface", "Client Logic Integration"], correctAnswer: "Command Line Interface" },
            { questionText: "Which decorator is used to define a component in Angular?", options: ["@NgModule", "@Injectable", "@Directive", "@Component"], correctAnswer: "@Component" }
            // ... Add 90+ more Angular questions
        ]
    },
    {
        id: "vue-js-basics",
        title: "Vue.js Basics",
        icon: "fab fa-vuejs",
        description: "Discover the core concepts of the Vue.js framework.",
        questions: [
            { questionText: "Vue.js is a progressive framework for building __________.", options: ["Backend services", "User interfaces", "Mobile operating systems", "Databases"], correctAnswer: "User interfaces" },
            { questionText: "What is the core library of Vue.js focused on?", options: ["State management", "Routing", "The view layer only", "End-to-end testing"], correctAnswer: "The view layer only" },
            { questionText: "What is a common way to create a Vue instance?", options: ["`new VueApp({})`", "`Vue.create({})`", "`new Vue({})`", "`Vue.init({})`"], correctAnswer: "`new Vue({})`" }, // For Vue 2; Vue 3 is `createApp`
            { questionText: "What are 'directives' in Vue.js (e.g., `v-if`, `v-for`)?", options: ["JavaScript functions", "Special tokens in the markup that tell the library to do something to a DOM element", "CSS classes", "Vue components"], correctAnswer: "Special tokens in the markup that tell the library to do something to a DOM element" },
            { questionText: "What is the purpose of the `data` option in a Vue component?", options: ["To define methods", "To store reactive data that, when changed, will update the view", "To declare props", "To list child components"], correctAnswer: "To store reactive data that, when changed, will update the view" },
            { questionText: "How do you achieve conditional rendering in Vue.js?", options: ["Using `v-show` or `v-if` directives", "With JavaScript `if/else` in the template", "By setting `display: none`", "Vue handles it automatically"], correctAnswer: "Using `v-show` or `v-if` directives" },
            { questionText: "What are 'computed properties' in Vue?", options: ["Methods that are executed on every render", "Properties that are cached based on their reactive dependencies and only re-evaluate when dependencies change", "External data sources", "Event handlers"], correctAnswer: "Properties that are cached based on their reactive dependencies and only re-evaluate when dependencies change" },
            { questionText: "How do you listen to DOM events in Vue.js templates (e.g., a click)?", options: ["Using `addEventListener`", "With `on:` or the shorthand `@` (e.g., `@click`)", "By defining methods only", "Vue does not support direct event listening in templates"], correctAnswer: "With `on:` or the shorthand `@` (e.g., `@click`)" },
            { questionText: "What is a Single File Component (.vue file)?", options: ["A JavaScript file only", "A file that encapsulates a component's template, script (logic), and styles", "An HTML file with Vue directives", "A CSS file for a component"], correctAnswer: "A file that encapsulates a component's template, script (logic), and styles" },
            { questionText: "What is Vue Router used for?", options: ["Managing global state", "Making HTTP requests", "Handling client-side routing for single-page applications", "Styling components"], correctAnswer: "Handling client-side routing for single-page applications" }
            // ... Add 90+ more Vue.js questions
        ]
    },
    {
        id: "aws-basics",
        title: "AWS Basics",
        icon: "fab fa-aws",
        description: "Learn about core Amazon Web Services concepts and services.",
        questions: [
            { questionText: "What does AWS stand for?", options: ["Advanced Web Solutions", "Amazon Web Services", "Automated Web Systems", "Amazon Worldwide Servers"], correctAnswer: "Amazon Web Services" },
            { questionText: "Which AWS service provides scalable virtual servers (compute capacity)?", options: ["S3", "RDS", "EC2", "Lambda"], correctAnswer: "EC2" },
            { questionText: "What is Amazon S3 primarily used for?", options: ["Running applications", "Relational databases", "Object storage (files, backups, static website hosting)", "Sending emails"], correctAnswer: "Object storage (files, backups, static website hosting)" },
            { questionText: "Which AWS service is a managed relational database service?", options: ["DynamoDB", "Redshift", "ElastiCache", "RDS"], correctAnswer: "RDS" },
            { questionText: "What is an AWS Region?", options: ["A single data center", "A geographical area consisting of multiple Availability Zones", "A specific AWS service", "A customer account"], correctAnswer: "A geographical area consisting of multiple Availability Zones" },
            { questionText: "What is an Availability Zone (AZ) in AWS?", options: ["A global network point", "One or more discrete data centers with redundant power, networking, and connectivity in an AWS Region", "A billing construct", "A type of EC2 instance"], correctAnswer: "One or more discrete data centers with redundant power, networking, and connectivity in an AWS Region" },
            { questionText: "Which AWS service allows you to run code without provisioning or managing servers (serverless compute)?", options: ["EC2", "Beanstalk", "Lambda", "ECS"], correctAnswer: "Lambda" },
            { questionText: "What is AWS IAM used for?", options: ["Storing large objects", "Managing access to AWS services and resources securely", "Monitoring application performance", "Deploying applications"], correctAnswer: "Managing access to AWS services and resources securely" },
            { questionText: "Which AWS service provides a managed NoSQL database?", options: ["RDS", "Aurora", "DynamoDB", "Neptune"], correctAnswer: "DynamoDB" },
            { questionText: "What is an Amazon VPC (Virtual Private Cloud)?", options: ["A public cloud service", "A logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network you define", "A content delivery network", "A data warehousing service"], correctAnswer: "A logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network you define" }
            // ... Add 90+ more AWS questions
        ]
    },
    {
        id: "linux-cli",
        title: "Linux Command Line",
        icon: "fab fa-linux",
        description: "Basic commands for navigating and managing a Linux system.",
        questions: [
            { questionText: "Which command lists files and directories in the current directory?", options: ["dir", "show", "list", "ls"], correctAnswer: "ls" },
            { questionText: "Which command is used to change the current directory?", options: ["cd", "chgdir", "moveto", "goto"], correctAnswer: "cd" },
            { questionText: "What does `pwd` stand for and do?", options: ["Print Working Directory - shows the current directory path", "Password - changes user password", "Package Work Download - downloads a package", "Process Watch Daemon - lists processes"], correctAnswer: "Print Working Directory - shows the current directory path" },
            { questionText: "How do you create a new directory named 'mydir'?", options: ["create mydir", "newdir mydir", "mkdir mydir", "makedir mydir"], correctAnswer: "mkdir mydir" },
            { questionText: "Which command is used to copy a file 'source.txt' to 'destination.txt'?", options: ["move source.txt destination.txt", "copy source.txt destination.txt", "cp source.txt destination.txt", "clone source.txt destination.txt"], correctAnswer: "cp source.txt destination.txt" },
            { questionText: "How do you remove a file named 'myfile.txt'?", options: ["del myfile.txt", "erase myfile.txt", "rm myfile.txt", "remove myfile.txt"], correctAnswer: "rm myfile.txt" },
            { questionText: "Which command displays the content of a text file 'notes.txt' on the screen?", options: ["view notes.txt", "cat notes.txt", "display notes.txt", "type notes.txt"], correctAnswer: "cat notes.txt" },
            { questionText: "What is the `sudo` command used for?", options: ["To switch user", "To execute a command with superuser (root) privileges", "To stop a process", "To search for files"], correctAnswer: "To execute a command with superuser (root) privileges" },
            { questionText: "How can you find lines containing 'error' in a file 'log.txt'?", options: ["search error in log.txt", "find error log.txt", "grep 'error' log.txt", "locate 'error' log.txt"], correctAnswer: "grep 'error' log.txt" },
            { questionText: "Which command is used to change file permissions?", options: ["chown", "chgrp", "chmod", "chfile"], correctAnswer: "chmod" }
            // ... Add 90+ more Linux CLI questions
        ]
    },



    // quizzes.js

// ... (Keep all your previously defined quizzes like JavaScript, Python, SQL, HTML, CSS, etc. here) ...
// (Ensure the comma is present after the last existing quiz object before adding new ones)

// --- ADD THESE NEW QUIZZES to your existing 'quizzes' array ---
{
    id: "java-basics",
    title: "Java Basics",
    icon: "fab fa-java", // Font Awesome icon for Java
    description: "Test your fundamental knowledge of the Java programming language.",
    questions: [
        { questionText: "What is the main method signature in a Java application?", options: ["public static void main(String args)", "public static void main(String[] args)", "static void main(String[] args)", "public void main(String[] args)"], correctAnswer: "public static void main(String[] args)" },
        { questionText: "Which keyword is used to create an instance of a class in Java?", options: ["create", "instance", "new", "object"], correctAnswer: "new" },
        { questionText: "Which of these is NOT a primitive data type in Java?", options: ["int", "float", "String", "boolean"], correctAnswer: "String" },
        { questionText: "What is the default value of a boolean variable in Java?", options: ["true", "false", "0", "null"], correctAnswer: "false" },
        { questionText: "How do you declare a single-line comment in Java?", options: ["/* comment */", "# comment", "// comment", "<!-- comment -->"], correctAnswer: "// comment" },
        { questionText: "Which keyword is used to prevent a class from being subclassed (inherited)?", options: ["static", "abstract", "final", "private"], correctAnswer: "final" },
        { questionText: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Visual Machine", "Java Verified Module", "Java Very Large Module"], correctAnswer: "Java Virtual Machine" },
        { questionText: "Which access modifier provides the widest accessibility?", options: ["private", "protected", "default (package-private)", "public"], correctAnswer: "public" },
        { questionText: "What is the superclass of all classes in Java by default?", options: ["Main", "System", "Object", "Class"], correctAnswer: "Object" },
        { questionText: "How do you compare two strings for equality of their content in Java?", options: ["str1 == str2", "str1.equals(str2)", "str1.compare(str2)", "str1 === str2"], correctAnswer: "str1.equals(str2)" }
        // ... Add 90+ more Java questions
    ]
},
{
    id: "c-programming",
    title: "C Programming",
    icon: "fas fa-c", // You might need a custom icon or a generic code icon if 'fas fa-c' isn't in your FA set
    description: "Explore fundamental concepts of the C programming language.",
    questions: [
        { questionText: "What is the function used to print output to the console in C?", options: ["cout <<", "System.out.println()", "printf()", "echo()"], correctAnswer: "printf()" },
        { questionText: "Which symbol is used to denote a preprocessor directive in C?", options: ["$", "&", "%", "#"], correctAnswer: "#" },
        { questionText: "How do you declare a pointer to an integer in C?", options: ["int ptr;", "int &ptr;", "int *ptr;", "pointer int ptr;"], correctAnswer: "int *ptr;" },
        { questionText: "What is the purpose of the `malloc()` function in C?", options: ["To free allocated memory", "To modify existing memory", "To allocate a block of memory dynamically", "To measure memory usage"], correctAnswer: "To allocate a block of memory dynamically" },
        { questionText: "Which header file is required for using functions like `printf()` and `scanf()`?", options: ["<stdlib.h>", "<math.h>", "<string.h>", "<stdio.h>"], correctAnswer: "<stdio.h>" },
        { questionText: "How is a single-line comment written in C (standard C89/90)?", options: ["// comment", "# comment", "/* comment */", "-- comment"], correctAnswer: "/* comment */" }, // Note: // is C99/C++ style but widely supported
        { questionText: "What is the `sizeof` operator used for in C?", options: ["To get the size of a file", "To determine the size (in bytes) of a data type or variable", "To resize a variable", "To count elements in an array"], correctAnswer: "To determine the size (in bytes) of a data type or variable" },
        { questionText: "Which keyword is used to define a structure in C?", options: ["structure", "object", "class", "struct"], correctAnswer: "struct" },
        { questionText: "What is the entry point of a C program?", options: ["start() function", "main() function", "begin() function", "program() function"], correctAnswer: "main() function" },
        { questionText: "How do you terminate a C string?", options: ["With a period (.)", "With a newline character (\\n)", "With a null character (\\0)", "With an exclamation mark (!)"], correctAnswer: "With a null character (\\0)" }
        // ... Add 90+ more C questions
    ]
},
{



  
        // Your C++ questions...

    id: "cpp-programming",
    title: "C++ Programming",
    icon: "CPP.avif", // <<-- Placeholder for your image URL
    iconType: "image", // Flag to indicate it's an image URL
    // icon: "fas fa-c", 
    description: "Test your knowledge of core C++ concepts.",
    questions: [
        { questionText: "Which keyword is used to define a class in C++?", options: ["struct", "object", "class", "define"], correctAnswer: "class" },
        { questionText: "What is `cout` in C++?", options: ["A keyword", "A function for input", "An object of ostream class used for output to the standard output device", "A preprocessor directive"], correctAnswer: "An object of ostream class used for output to the standard output device" },
        { questionText: "How do you declare a reference to an integer variable `x` in C++?", options: ["int *ref = &x;", "int &ref = x;", "ref int = x;", "int ref = &x;"], correctAnswer: "int &ref = x;" },
        { questionText: "Which C++ keyword is used for dynamic memory allocation similar to `malloc` in C?", options: ["alloc", "new", "create", "getmem"], correctAnswer: "new" },
        { questionText: "What is function overloading in C++?", options: ["Defining multiple functions with the same name but different parameters", "Overriding a base class function in a derived class", "A function that calls itself", "A function with too many parameters"], correctAnswer: "Defining multiple functions with the same name but different parameters" },
        { questionText: "Which header file is typically included for using `cout` and `cin`?", options: ["<stdio.h>", "<conio.h>", "<iostream>", "<string>"], correctAnswer: "<iostream>" },
        { questionText: "What is a constructor in C++?", options: ["A function used to destroy objects", "A special member function that is automatically called when an object is created", "A regular member function that returns a value", "A data member of a class"], correctAnswer: "A special member function that is automatically called when an object is created" },
        { questionText: "Which access specifier makes class members accessible only within the class itself and by friend functions/classes?", options: ["public", "protected", "private", "internal"], correctAnswer: "private" },
        { questionText: "What is inheritance in C++?", options: ["The ability of a class to derive properties and characteristics from another class", "Creating multiple instances of a class", "Encapsulating data and functions together", "Hiding implementation details"], correctAnswer: "The ability of a class to derive properties and characteristics from another class" },
        { questionText: "How is a single-line comment written in C++?", options: ["/* comment */", "# comment", "// comment", "<!-- comment -->"], correctAnswer: "// comment" }
        // ... Add 90+ more C++ questions
    ]
}
// Make sure there is NO comma after the last quiz object in the ENTIRE array if this is the end.
// If you add more quizzes after these, ensure the last one here has a comma.
];
