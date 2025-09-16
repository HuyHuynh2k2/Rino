type InterviewData = {
  id: number;
  type: string;
  topic: string[];
  question: string;
  answer: string;
  code: string;
};

const data: InterviewData[] = [
  {
    id: 0,
    type: "JavaScript",
    topic: ["variable", "scoping", "es6"],
    question: "What is the different between var - let - const ?",
    answer: `var: function-scope, hoisted
      let: block-scope, temperol dead zone
      const: block-scope, cannot be reassigned
    `,
    code: `
      // var - function scoped, can be redeclared
      var x = 1;
      if (true) {
        var x = 2;
      }
      console.log(x); // 2

      // let - block scoped, cannot be redeclared
      let y = 1;
      if (true) {
        let y = 2; // different variable
      } 
      console.log(y); // 1

      const z = {name: 'John'};
      z.name = 'Jane'; // OK - object is mutable
      const z = 2;
      z = 3; // const cannot be reassigned
    `,
  },
  {
    id: 1,
    type: "JavaScript",
    topic: ["closer", "scoping", "function"],
    question: "Explain closures and provide a practical example ?",
    answer: `
      A closure is a function that has access to variables in its outer scope even after the outer function has returned.
      
      Key points:
      - Functions retain access to outer scope
      - Useful for data privacy
      - Common in callbacks and modules
    `,
    code: `
      function createCounter() {
        let count = 0; // Private variable
        
        return {
          increment: () => ++count,
          decrement: () => --count,
          getCount: () => count
        };
      }

      const counter = createCounter();
      counter.increment();
      console.log(counter.getCount()); // 1
    `,
  },
  {
    id: 2,
    type: "JavaScript",
    topic: ["this", "context", "binding"],
    question: "Explain the 'this' keyword and its different contexts",
    answer: `
      'this' refer to the object that is currently executing the funtion.

      We have:
      - Global context: window object itself
      - Object method: the object itself
      - Arrow funtions: inherit from enclosing scope
    `,
    code: `// Global context
      
    // Object method
    const obj = {
      name: 'Alice',
      greet() {
        console.log(this.name); // Alice
      }
    }

    // Arrow function
    const obj2 = {
      name: 'Bob',
      greet: () => {
        console.log(this.name); // Undefined (inherits global this)
      }
    }
    `,
  },
  {
    id: 3,
    type: "JavaScript",
    topic: ["event-loop", "async", "runtime"],
    question: "How does JavaScript event loop work?",
    answer: `
      The event loop is what allows JS to perform non-blocking operations despite being single-threaded.

      Components:
      - Call stack: executes synchronous code
      - Web API: handle async operations
      - Callback queue: Queues completed async operations
      - Microtask queue: higher priority queue for promises,
    `,
    code: `
      /** Output: 1, 4, 3, 2
        *  Explantion:
        *  1. Synchornous code run first (1, 4);
        *  2. Microtask (Promise) run before macrotasks
        *  3. setTimeout callback run last
        */ 

      console.log(1);

      setTimeout(() => {
        console.log(2);
      }, 0);

      Promise.resolve().then(() => {
        console.log(3);
      })

      console.log(4);

      
    `,
  },
  {
    id: 4,
    type: "JavaScript",
    topic: ["promises", "async", "error-handling"],
    question: "What are Prmoise and how do they work?",
    answer: `
      Promises represent the eventual result of an asynchronous operation. They have three states: pending, fulfilled, or rejected.

      Benefits:
      - Avoid callback hell
      - Better error handling
      - Chainable operations
      - Support for Promise.all(), Promise.race(), etc...
    `,
    code: `
      // Creating a promise

      const myPromises = new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;

        setTimeout(() => {
          if (success) {
            resolve('Operation successful!');
          } else {
            reject('Operatoin fail!');  
          }
        }, 1000);
      })

      // Using promises:
      myPromises
        .then(result => {
          console.log(result);
          return 'Next Step';
        })
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          console.log('Operation completed');
        })
      
      // Promise ultilities
      Promise.all([promise1, promise2, promise3])
        .then(results => console.log(results));

      Promise.race([promise1, promise2])
        .then(firstResult => console.log(firstResult));
    `,
  },
  {
    id: 5,
    type: "JavaScript",
    topic: ["await", "async", "promises"],
    question: "What is async/await and how does it comapare to promise ?",
    answer: `
      async/await is syntatic sugar over Promises that make asynchornous code look and behave like synchornous code.

      Benefits:
      - More readable than promise chains
      - Better error handling with try/catch
      - Easier debugging
      - Sequential async operations are cleaner
    `,
    code: `
      // promise chain
      function fetchUserData() {
        return fetch('/api/user')
          .then(response => response.json())
          .then(user => fetch('/api/posts/$ {user.id}'))
          .then(response => response.json())
          .then(posts => ({user, posts}))
          .catch(error => console.log(error));
      }

      // async/await
      async function fecthUserDataAsync() {
        const userResponse = await fetch('/api/user');
        const user = await userResponse.json();

        const postsResponse = await fetch('/api/posts/$ {user.id}');
        const posts = await postsResponse.json();

        return {user, posts}
      } catch (error) {
        console.log(error);
      }

      // error handling
      async function handleErrors() {
        try {
          const result = await riskyOperation();
          console.log(result);
        } catch (error) {
          console.log(error.message);
        }
      }
    `,
  },
  {
    id: 6,
    type: "JavaScript",
    topic: ["prototype", "inheritance", "objects"],
    question: "Explain prototypal inheritance in JavaScript",
    answer: `
    JavaScript uses prototype-based inheritance where objects can inherit properties and methods from other objects.

    Key concepts:
    - Every object has a __proto__ property
    - Constructor functions have a prototype property
    - Objects inherit from their constructor's prototype
    - Prototype chain enables inheritance lookup`,
    code: `
      // Constructor function
      function Person(name, age) {
        this.name = name;
        this.age = age;
      }

      // Adding method to prototype
      Person.prototype.greet = function() {
        return \`Hello, I'm \${this.name}\`;
      };

      Person.prototype.getAge = function() {
        return this.age;
      };

      // Creating instances
      const person1 = new Person('Alice', 30);
      const person2 = new Person('Bob', 25);

      console.log(person1.greet()); // "Hello, I'm Alice"
      console.log(person2.greet()); // "Hello, I'm Bob"

      // Inheritance
      function Student(name, age, grade) {
        Person.call(this, name, age);
        this.grade = grade;
      }

      Student.prototype = Object.create(Person.prototype);
      Student.prototype.constructor = Student;

      Student.prototype.study = function() {
        return \`\${this.name} is studying\`;
      };

      const student = new Student('Charlie', 20, 'A');
      console.log(student.greet()); // "Hello, I'm Charlie"
      console.log(student.study()); // "Charlie is studying"`,
  },
  {
    id: 7,
    type: "JavaScript",
    topic: ["equality", "comparison", "coercion"],
    question: "What's the difference between == and === ?",
    answer: `
      == performs loose equality with type coercion, while === performs strict equality without type coercion.

      Key differences:
      - == converts types before comparison
      - === compares both value and type
      - === is generally recommended for predictable behavior
      - == can lead to unexpected results`,
    code: `// Loose equality (==) with type coercion
      console.log(5 == '5');     // true (string '5' converted to number)
      console.log(true == 1);    // true (boolean converted to number)
      console.log(false == 0);   // true
      console.log(null == undefined); // true
      console.log('' == 0);      // true (empty string converted to 0)

      // Strict equality (===) without coercion
      console.log(5 === '5');    // false (different types)
      console.log(true === 1);   // false
      console.log(false === 0);  // false
      console.log(null === undefined); // false
      console.log('' === 0);     // false

      // Unexpected behavior with ==
      console.log([] == 0);      // true (array converted to primitive)
      console.log({} == false);  // false
      console.log('0' == false); // true

      // Safe comparison with ===
      console.log([] === 0);     // false
      console.log('0' === false); // false`,
  },
  {
    id: 8,
    type: "JavaScript",
    topic: ["functions", "arrow-functions", "es6"],
    question:
      "What are arrow functions and how do they differ from regular functions?",
    answer: `
      Arrow functions are a concise way to write functions introduced in ES6. They have different behavior regarding 'this', arguments, and hoisting.

      Key differences:
      - No own 'this' binding (lexical this)
      - Cannot be used as constructors
      - No arguments object
      - Cannot be hoisted`,
    code: `
      // Regular function
      function regularFunction(a, b) {
        console.log(arguments); // [1, 2]
        console.log(this);      // depends on how it's called
        return a + b;
      }

      // Arrow function
      const arrowFunction = (a, b) => {
        // console.log(arguments); // ReferenceError: arguments is not defined
        console.log(this); // inherits from enclosing scope
        return a + b;
      };

      // 'this' binding difference
      const obj = {
        name: 'Alice',
        regularMethod: function() {
          console.log(this.name); // 'Alice'
          
          const inner = function() {
            console.log(this.name); // undefined (this is global/window)
          };
          inner();
          
          const arrowInner = () => {
            console.log(this.name); // 'Alice' (inherits from regularMethod)
          };
          arrowInner();
        }
      };

      // Constructor difference
      function RegularConstructor(name) {
        this.name = name;
      }
      const instance1 = new RegularConstructor('Bob'); // Works

      const ArrowConstructor = (name) => {
        this.name = name;
      };
      // const instance2 = new ArrowConstructor('Charlie'); // TypeError`,
  },
  {
    id: 9,
    type: "JavaScript",
    topic: ["callback", "higher-order", "functions"],
    question: "What are callback functions and higher-order functions?",
    answer: `
      A callback is a function passed as an argument to another function. Higher-order functions are functions that take other functions as arguments or return functions.

      Use cases:
      - Event handling
      - Asynchronous operations
      - Array methods (map, filter, reduce)
      - Functional programming patterns`,
    code: `
      // Basic callback example
      function greet(name, callback) {
        console.log(\`Hello \${name}!\`);
        callback();
      }

      function afterGreeting() {
        console.log('Nice to meet you!');
      }

      greet('Alice', afterGreeting);

      // Higher-order function example
      function createMultiplier(multiplier) {
        return function(number) {
          return number * multiplier;
        };
      }

      const double = createMultiplier(2);
      const triple = createMultiplier(3);

      console.log(double(5)); // 10
      console.log(triple(5)); // 15

      // Array methods with callbacks
      const numbers = [1, 2, 3, 4, 5];

      const doubled = numbers.map(num => num * 2);
      const evens = numbers.filter(num => num % 2 === 0);
      const sum = numbers.reduce((acc, num) => acc + num, 0);

      console.log(doubled); // [2, 4, 6, 8, 10]
      console.log(evens);   // [2, 4]
      console.log(sum);     // 15

      // Async callback
      function fetchData(callback) {
        setTimeout(() => {
          const data = { id: 1, name: 'John' };
          callback(data);
        }, 1000);
      }

      fetchData((data) => {
        console.log('Received data:', data);
      });`,
  },
  {
    id: 10,
    type: "JavaScript",
    topic: ["array", "methods", "functional"],
    question: "Explain map(), filter(), and reduce() methods",
    answer: `
    These are essential array methods for functional programming in JavaScript.

    - map(): transforms each element and returns new array
    - filter(): selects elements based on condition
    - reduce(): accumulates array into single value
    All methods are immutable and don't modify original array`,
    code: `
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      // map() - transform each element
      const squares = numbers.map(num => num * num);
      console.log(squares); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

      // filter() - select elements
      const evens = numbers.filter(num => num % 2 === 0);
      console.log(evens); // [2, 4, 6, 8, 10]

      // reduce() - accumulate to single value
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      console.log(sum); // 55

      const max = numbers.reduce((acc, num) => Math.max(acc, num), -Infinity);
      console.log(max); // 10

      // Chaining methods
      const result = numbers
        .filter(num => num % 2 === 0)  // get even numbers
        .map(num => num * num)         // square them
        .reduce((acc, num) => acc + num, 0); // sum them

      console.log(result); // 220 (4 + 16 + 36 + 64 + 100)

      // Complex example with objects
      const users = [
        { name: 'Alice', age: 25, active: true },
        { name: 'Bob', age: 30, active: false },
        { name: 'Charlie', age: 35, active: true }
      ];

      const activeUserNames = users
        .filter(user => user.active)
        .map(user => user.name);

      console.log(activeUserNames); // ['Alice', 'Charlie']`,
  },
  {
    id: 11,
    type: "JavaScript",
    topic: ["destructuring", "es6", "syntax"],
    question: "What is destructuring assignment in JavaScript?",
    answer: `
      Destructuring allows unpacking values from arrays or properties from objects into distinct variables using a syntax that mirrors array and object literals.

      Benefits:
      - Cleaner code for extracting values
      - Default values support
      - Rest/spread patterns
      - Function parameter destructuring`,
    code: `
      // Array destructuring
      const colors = ['red', 'green', 'blue', 'yellow'];
      const [first, second, ...rest] = colors;

      console.log(first);  // 'red'
      console.log(second); // 'green'
      console.log(rest);   // ['blue', 'yellow']

      // Object destructuring
      const person = {
        name: 'Alice',
        age: 30,
        city: 'New York',
        country: 'USA'
      };

      const { name, age, ...location } = person;
      console.log(name);     // 'Alice'
      console.log(age);      // 30
      console.log(location); // { city: 'New York', country: 'USA' }

      // Renaming and default values
      const { name: personName, salary = 50000 } = person;
      console.log(personName); // 'Alice'
      console.log(salary);     // 50000 (default value)

      // Nested destructuring
      const user = {
        id: 1,
        profile: {
          name: 'Bob',
          contact: {
            email: 'bob@example.com'
          }
        }
      };

      const { profile: { name: userName, contact: { email } } } = user;
      console.log(userName); // 'Bob'
      console.log(email);    // 'bob@example.com'

      // Function parameter destructuring
      function greetUser({ name, age = 25 }) {
        console.log(\`Hello \${name}, you are \${age} years old\`);
      }

      greetUser({ name: 'Charlie', age: 30 }); // Hello Charlie, you are 30 years old`,
  },
  {
    id: 12,
    type: "JavaScript",
    topic: ["spread", "rest", "es6"],
    question: "Explain the spread operator and rest parameters",
    answer: `
      The spread operator (...) expands iterables into individual elements, while rest parameters collect multiple elements into an array.

      Use cases:
      - Array/object copying and merging
      - Function arguments
      - Destructuring assignments
      - Converting iterables to arrays`,
    code: `
      // Spread operator with arrays
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
      const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

      // Spread with objects
      const obj1 = { a: 1, b: 2 };
      const obj2 = { c: 3, d: 4 };
      const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

      // Overriding properties
      const user = { name: 'Alice', age: 25 };
      const updatedUser = { ...user, age: 26 }; // { name: 'Alice', age: 26 }

      // Function arguments
      function sum(a, b, c) {
        return a + b + c;
      }

      const numbers = [1, 2, 3];
      console.log(sum(...numbers)); // 6

      // Rest parameters
      function collectArguments(first, ...remaining) {
        console.log('First:', first);
        console.log('Remaining:', remaining);
      }

      collectArguments(1, 2, 3, 4, 5);
      // First: 1
      // Remaining: [2, 3, 4, 5]

      // Converting NodeList to Array
      const elements = document.querySelectorAll('div');
      const elementsArray = [...elements];

      // Copying arrays (shallow copy)
      const original = [1, 2, 3];
      const copy = [...original];
      copy.push(4);
      console.log(original); // [1, 2, 3] (unchanged)
      console.log(copy);     // [1, 2, 3, 4]`,
  },
  {
    id: 13,
    type: "JavaScript",
    topic: ["template-literals", "string", "es6"],
    question: "What are template literals and their advantages?",
    answer: `
      Template literals are string literals that allow embedded expressions and multi-line strings using backticks (\`).

      Features:
      - Expression interpolation with \${expression}
      - Multi-line strings without escape characters
      - Tagged template literals for custom processing
      - Cleaner syntax than string concatenation`,
    code: `
      // Basic template literal
      const name = 'Alice';
      const age = 30;
      const message = \`Hello, my name is \${name} and I'm \${age} years old.\`;
      console.log(message);

      // Multi-line strings
      const multiLine = \`
        This is a multi-line
        string that spans
        several lines.
      \`;

      // Expression evaluation
      const a = 10;
      const b = 20;
      const result = \`The sum of \${a} and \${b} is \${a + b}\`;
      console.log(result); // "The sum of 10 and 20 is 30"

      // Function calls in templates
      function formatPrice(price) {
        return \`$\${price.toFixed(2)}\`;
      }

      const price = 29.99;
      const productInfo = \`Price: \${formatPrice(price)}\`;
      console.log(productInfo); // "Price: $29.99"

      // Tagged template literals
      function highlight(strings, ...values) {
        return strings.reduce((result, string, i) => {
          const value = values[i] ? \`<mark>\${values[i]}</mark>\` : '';
          return result + string + value;
        }, '');
      }

      const user = 'Bob';
      const score = 95;
      const html = highlight\`User \${user} scored \${score} points!\`;
      console.log(html); // "User <mark>Bob</mark> scored <mark>95</mark> points!"

      // Comparison with concatenation
      // Old way
      const oldWay = 'Hello ' + name + ', you have ' + (10 - 3) + ' messages';

      // New way
      const newWay = \`Hello \${name}, you have \${10 - 3} messages\`;`,
  },
  {
    id: 14,
    type: "JavaScript",
    topic: ["es6", "classes", "inheritance"],
    question: "Explain ES6 classes and how they work",
    answer: `
      ES6 classes provide a cleaner syntax for creating objects and implementing inheritance, built on top of JavaScript's prototypal inheritance.

      Features:
      - Constructor method for initialization
      - Instance and static methods
      - Inheritance with extends keyword
      - Super keyword for parent class access`,
    code: `
      // Basic class definition
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
        
        // Instance method
        greet() {
          return \`Hello, I'm \${this.name}\`;
        }
        
        // Static method
        static getSpecies() {
          return 'Homo sapiens';
        }
        
        // Getter
        get info() {
          return \`\${this.name} is \${this.age} years old\`;
        }
        
        // Setter
        set age(newAge) {
          if (newAge > 0) {
            this._age = newAge;
          }
        }
        
        get age() {
          return this._age;
        }
      }

      // Creating instances
      const person1 = new Person('Alice', 30);
      console.log(person1.greet()); // "Hello, I'm Alice"
      console.log(Person.getSpecies()); // "Homo sapiens"

      // Inheritance
      class Student extends Person {
        constructor(name, age, grade) {
          super(name, age); // Call parent constructor
          this.grade = grade;
        }
        
        // Override parent method
        greet() {
          return \`\${super.greet()}, I'm a student\`;
        }
        
        study() {
          return \`\${this.name} is studying\`;
        }
      }

      const student = new Student('Bob', 20, 'A');
      console.log(student.greet()); // "Hello, I'm Bob, I'm a student"
      console.log(student.study()); // "Bob is studying"

      // Private fields (modern JavaScript)
      class BankAccount {
        #balance = 0; // Private field
        
        deposit(amount) {
          this.#balance += amount;
        }
        
        getBalance() {
          return this.#balance;
        }
      }`,
  },
  {
    id: 15,
    type: "JavaScript",
    topic: ["scope", "variables", "functions"],
    question: "What are the different types of scope in JavaScript?",
    answer: `
      JavaScript has several types of scope that determine where variables can be accessed.

      Types of scope:
      - Global scope: accessible everywhere
      - Function scope: accessible within function
      - Block scope: accessible within block (let/const)
      - Module scope: accessible within module`,
    code: `
      // Global scope
      var globalVar = 'I am global';
      let globalLet = 'I am also global';

      function demonstrateScope() {
        // Function scope
        var functionScoped = 'I am function scoped';
        
        if (true) {
          // Block scope
          let blockScoped = 'I am block scoped';
          const alsoBlockScoped = 'Me too';
          var notBlockScoped = 'I escape the block';
          
          console.log(blockScoped); // Works
          console.log(globalVar);   // Works
        }
        
        console.log(notBlockScoped); // Works (var escapes block)
        // console.log(blockScoped); // ReferenceError
        
        // Nested function scope
        function innerFunction() {
          console.log(functionScoped); // Works (closure)
          console.log(globalVar);      // Works
          
          let innerVar = 'I am inner';
          return innerVar;
        }
        
        return innerFunction;
      }

      // Lexical scoping example
      function outerFunction(x) {
        function innerFunction(y) {
          console.log(x + y); // x is accessible due to lexical scoping
        }
        
        return innerFunction;
      }

      const addFive = outerFunction(5);
      addFive(3); // 8

      // Module scope (in module system)
      // Each module has its own scope
      // Variables declared at top level are module-scoped, not global`,
  },
  {
    id: 16,
    type: "JavaScript",
    topic: ["null", "undefined", "types"],
    question: "What's the difference between null and undefined?",
    answer: `
      null and undefined are both primitive values representing absence of value, but they have different meanings and use cases.

      Key differences:
      - undefined: declared but not assigned, missing properties
      - null: intentional absence of value
      - typeof null returns 'object' (historical bug)
      - typeof undefined returns 'undefined'`,
    code: `
      // undefined examples
      let unassignedVariable;
      console.log(unassignedVariable); // undefined

      function noReturn() {
        // implicitly returns undefined
      }
      console.log(noReturn()); // undefined

      const obj = { name: 'Alice' };
      console.log(obj.age); // undefined (property doesn't exist)

      function hasParameter(param) {
        console.log(param); // undefined if not passed
      }
      hasParameter(); // undefined

      // null examples
      let intentionallyEmpty = null;
      console.log(intentionallyEmpty); // null

      // API often returns null for "not found"
      const user = findUserById(999); // might return null

      // Type checking
      console.log(typeof undefined); // 'undefined'
      console.log(typeof null);      // 'object' (historical bug)

      // Comparison
      console.log(null == undefined);  // true (loose equality)
      console.log(null === undefined); // false (strict equality)

      // Checking for both
      function isEmpty(value) {
        return value == null; // checks for both null and undefined
      }

      // More explicit checking
      function isNullOrUndefined(value) {
        return value === null || value === undefined;
      }

      // Default value assignment
      function greet(name) {
        name = name || 'Guest';        // falsy check
        name = name ?? 'Guest';        // nullish coalescing (ES2020)
        console.log(\`Hello, \${name}\`);
      }

      // Nullish coalescing vs OR operator
      const config = {
        timeout: 0,
        retries: null
      };

      console.log(config.timeout || 5000);  // 5000 (0 is falsy)
      console.log(config.timeout ?? 5000);  // 0 (0 is not nullish)
      console.log(config.retries ?? 3);     // 3 (null is nullish)`,
  },
  {
    id: 17,
    type: "JavaScript",
    topic: ["objects", "creation", "properties"],
    question: "What are the different ways to create objects in JavaScript?",
    answer: `
      JavaScript provides several ways to create objects, each with different use cases and characteristics.

      Methods:
      - Object literal notation
      - Constructor functions
      - Object.create()
      - ES6 classes
      - Factory functions`,
    code: `// 1. Object literal (most common)
      const person1 = {
        name: 'Alice',
        age: 30,
        greet() {
          return \`Hello, I'm \${this.name}\`;
        }
      };

      // 2. Constructor function
      function Person(name, age) {
        this.name = name;
        this.age = age;
        this.greet = function() {
          return \`Hello, I'm \${this.name}\`;
        };
      }

      const person2 = new Person('Bob', 25);

      // 3. Object.create()
      const personPrototype = {
        greet() {
          return \`Hello, I'm \${this.name}\`;
        }
      };

      const person3 = Object.create(personPrototype);
      person3.name = 'Charlie';
      person3.age = 35;

      // 4. ES6 Classes
      class PersonClass {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
        
        greet() {
          return \`Hello, I'm \${this.name}\`;
        }
      }

      const person4 = new PersonClass('David', 40);

      // 5. Factory function
      function createPerson(name, age) {
        return {
          name,
          age,
          greet() {
            return 'Hello, I'm $ {this.name}';
          }
        };
      }

      const person5 = createPerson('Eve', 28);

      // 6. Using new Object()
      const person6 = new Object();
      person6.name = 'Frank';
      person6.age = 45;
      person6.greet = function() {
        return 'Hello, I'm $ {this.name}';
      };

      // 7. Object.assign()
      const personTemplate = { species: 'Human' };
      const person7 = Object.assign(personTemplate, {
        name: 'Grace',
        age: 32,
        greet() {
          return 'Hello, I'm $ {this.name}';
        }
      });`,
  },
  {
    id: 18,
    type: "JavaScript",
    topic: ["call", "apply", "bind", "this"],
    question: "Explain call(), apply(), and bind() methods",
    answer: `
    These methods allow explicit control over the 'this' context when invoking functions.

    - call(): invokes function with specified 'this' and arguments
    - apply(): like call() but takes arguments as array
    - bind(): returns new function with bound 'this' context
    All are used for function borrowing and context manipulation`,
    code: `
    const person1 = {
      name: 'Alice',
      greet(greeting, punctuation) {
        return '$ {greeting}, I'm $ {this.name}$ {punctuation}';
      }
    };

    const person2 = {
      name: 'Bob'
    };

    // call() - arguments passed individually
    console.log(person1.greet.call(person2, 'Hello', '!'));
    // "Hello, I'm Bob!"

    // apply() - arguments passed as array
    console.log(person1.greet.apply(person2, ['Hi', '.']));
    // "Hi, I'm Bob."

    // bind() - returns new function with bound context
    const boundGreet = person1.greet.bind(person2);
    console.log(boundGreet('Hey', '?'));
    // "Hey, I'm Bob?"

    // Partial application with bind
    const sayHello = person1.greet.bind(person2, 'Hello');
    console.log(sayHello('!!!'));
    // "Hello, I'm Bob!!!"

    // Practical example: finding max in array
    const numbers = [1, 2, 3, 4, 5];

    // Using apply to pass array elements as separate arguments
    const max = Math.max.apply(null, numbers);
    console.log(max); // 5

    // Modern alternative with spread operator
    const maxModern = Math.max(...numbers);

    // Function borrowing example
    const calculator = {
      add(a, b) {
        return a + b;
      }
    };

    const mathUtils = {};
    mathUtils.add = calculator.add.bind(mathUtils);
    console.log(mathUtils.add(5, 3)); // 8`,
  },
  {
    id: 19,
    type: "JavaScript",
    topic: ["debouncing", "throttling", "performance"],
    question: "What are debouncing and throttling?",
    answer: `
      Debouncing and throttling are techniques to limit the rate of function execution, commonly used for performance optimization.

      - Debouncing: delays function execution until after a specified time has passed since the last invocation
      - Throttling: ensures function is called at most once in a specified time period
      Both prevent excessive function calls during events like scrolling or typing`,
    code: `// Debouncing implementation
      function debounce(func, delay) {
        let timeoutId;
        
        return function(...args) {
          clearTimeout(timeoutId);
          
          timeoutId = setTimeout(() => {
            func.apply(this, args);
          }, delay);
        };
      }

      // Usage: search input
      const searchInput = document.getElementById('search');
      const handleSearch = debounce((event) => {
        console.log('Searching for:', event.target.value);
        // Make API call here
      }, 300);

      searchInput.addEventListener('input', handleSearch);

      // Throttling implementation
      function throttle(func, limit) {
        let inThrottle;
        
        return function(...args) {
          if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            
            setTimeout(() => {
              inThrottle = false;
            }, limit);
          }
        };
      }

      // Usage: scroll event
      const handleScroll = throttle(() => {
        console.log('Scroll position:', window.scrollY);
        // Update navbar or check if elements are in viewport
      }, 100);

      window.addEventListener('scroll', handleScroll);

      // Advanced throttling with leading and trailing options
      function advancedThrottle(func, limit, options = {}) {
        let timeout;
        let previous = 0;
        
        return function(...args) {
          const now = Date.now();
          const remaining = limit - (now - previous);
          
          if (remaining <= 0 || remaining > limit) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
            
            previous = now;
            func.apply(this, args);
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(() => {
              previous = options.leading === false ? 0 : Date.now();
              timeout = null;
              func.apply(this, args);
            }, remaining);
          }
        };
      }`,
  },
  {
    id: 20,
    type: "JavaScript",
    topic: ["currying", "functional", "closures"],
    question: "What is currying in JavaScript?",
    answer: `Currying is a functional programming technique that transforms a function with multiple arguments into a sequence of functions, each taking a single argument.

Benefits:
- Partial application of functions
- Code reusability and modularity
- Function composition
- Creating specialized functions from generic ones`,
    code: `// Basic currying example
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // 6

// Arrow function version
const addArrow = a => b => c => a + b + c;
console.log(addArrow(1)(2)(3)); // 6

// Generic curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// Using curry function
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

// All these work the same way
console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24
console.log(curriedMultiply(2, 3, 4)); // 24

// Practical example: creating specialized functions
const log = curry((level, message, data) => {
  console.log(\`[\${level}] \${message}\`, data);
});

const logError = log('ERROR');
const logWarning = log('WARNING');

logError('Database connection failed', { error: 'timeout' });
logWarning('Deprecated method used', { method: 'oldFunction' });

// Function composition with currying
const pipe = (...functions) => (value) => 
  functions.reduce((acc, fn) => fn(acc), value);

const addOne = curry((x) => x + 1);
const multiplyByTwo = curry((x) => x * 2);
const square = curry((x) => x * x);

const processNumber = pipe(
  addOne,
  multiplyByTwo,
  square
);

console.log(processNumber(3)); // ((3 + 1) * 2)^2 = 64`,
  },
  {
    id: 21,
    type: "JavaScript",
    topic: ["event-bubbling", "event-capturing", "dom"],
    question: "Explain event bubbling and event capturing",
    answer: `
      Event bubbling and capturing are two phases of event propagation in the DOM.

      - Capturing (trickling): event travels from document root to target element
      - Target: event reaches the target element
      - Bubbling: event travels from target element back to document root
      By default, event listeners are registered for the bubbling phase`,
    code: `
      // HTML structure for examples:
      // <div id="outer">
      //   <div id="middle">
      //     <div id="inner">Click me</div>
      //   </div>
      // </div>

      // Event bubbling (default behavior)
      document.getElementById('outer').addEventListener('click', () => {
        console.log('Outer div clicked');
      });

      document.getElementById('middle').addEventListener('click', () => {
        console.log('Middle div clicked');
      });

      document.getElementById('inner').addEventListener('click', () => {
        console.log('Inner div clicked');
      });

      // When clicking inner div, output:
      // Inner div clicked
      // Middle div clicked  
      // Outer div clicked

      // Event capturing (useCapture = true)
      document.getElementById('outer').addEventListener('click', () => {
        console.log('Outer div clicked (capture)');
      }, true);

      document.getElementById('middle').addEventListener('click', () => {
        console.log('Middle div clicked (capture)');
      }, true);

      document.getElementById('inner').addEventListener('click', () => {
        console.log('Inner div clicked (capture)');
      }, true);

      // When clicking inner div with capturing, output:
      // Outer div clicked (capture)
      // Middle div clicked (capture)
      // Inner div clicked (capture)

      // Stopping propagation
      document.getElementById('inner').addEventListener('click', (event) => {
        console.log('Inner div clicked');
        event.stopPropagation(); // Prevents bubbling
      });

      // Preventing default behavior
      document.getElementById('link').addEventListener('click', (event) => {
        event.preventDefault(); // Prevents link navigation
        console.log('Link clicked but navigation prevented');
      });

      // Event delegation (utilizing bubbling)
      document.getElementById('parent').addEventListener('click', (event) => {
        if (event.target.classList.contains('button')) {
          console.log('Button clicked:', event.target.textContent);
        }
      });

      // stopImmediatePropagation
      document.getElementById('inner').addEventListener('click', (event) => {
        console.log('First listener');
        event.stopImmediatePropagation();
      });

      document.getElementById('inner').addEventListener('click', (event) => {
        console.log('Second listener - will not execute');
      });`,
  },
  {
    id: 22,
    type: "JavaScript",
    topic: ["modules", "import", "export"],
    question: "What are JavaScript modules and how do they work?",
    answer: `
      JavaScript modules are reusable pieces of code that can export functionality and import it in other modules. They provide encapsulation and help organize code.

      Types:
      - ES6 modules (import/export)
      - CommonJS (require/module.exports)
      - AMD (define/require)
      - UMD (Universal Module Definition)`,
    code: `
      // ES6 Modules

      // math.js - Named exports
      export function add(a, b) {
        return a + b;
      }

      export function subtract(a, b) {
        return a - b;
      }

      export const PI = 3.14159;

      // Default export
      export default function multiply(a, b) {
        return a * b;
      }

      // utils.js - Export all at once
      function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

      function reverse(str) {
        return str.split('').reverse().join('');
      }

      export { capitalize, reverse };

      // main.js - Importing
      import multiply, { add, subtract, PI } from './math.js';
      import { capitalize, reverse } from './utils.js';

      // Import everything
      import * as MathUtils from './math.js';

      // Rename imports
      import { add as sum, subtract as diff } from './math.js';

      // Dynamic imports (ES2020)
      async function loadModule() {
        const { add, subtract } = await import('./math.js');
        console.log(add(5, 3));
      }

      // CommonJS (Node.js)
      // math.js
      function add(a, b) {
        return a + b;
      }

      function subtract(a, b) {
        return a - b;
      }

      module.exports = {
        add,
        subtract,
        PI: 3.14159
      };

      // Alternative CommonJS export
      exports.add = function(a, b) {
        return a + b;
      };

      // main.js
      const { add, subtract, PI } = require('./math');
      const math = require('./math');

      // Module pattern (IIFE)
      const Calculator = (function() {
        let result = 0;
        
        return {
          add(n) {
            result += n;
            return this;
          },
          subtract(n) {
            result -= n;
            return this;
          },
          getResult() {
            return result;
          },
          reset() {
            result = 0;
            return this;
          }
        };
      })();

      Calculator.add(10).subtract(5).add(3);
      console.log(Calculator.getResult()); // 8`,
  },
  {
    id: 23,
    type: "JavaScript",
    topic: ["promises", "promise-all", "promise-race"],
    question: "Explain Promise.all(), Promise.race(), and Promise.allSettled()",
    answer: `
      These are utility methods for handling multiple promises concurrently.

      - Promise.all(): waits for all promises to resolve, fails if any rejects
      - Promise.race(): resolves with the first settled promise (resolved or rejected)
      - Promise.allSettled(): waits for all promises to settle, returns all results
      - Promise.any(): resolves with the first successful promise (ES2021)`,
    code: `
      // Promise.all() - all must succeed
      const promise1 = Promise.resolve(1);
      const promise2 = Promise.resolve(2);
      const promise3 = Promise.resolve(3);

      Promise.all([promise1, promise2, promise3])
        .then(values => {
          console.log(values); // [1, 2, 3]
        })
        .catch(error => {
          console.error('One promise failed:', error);
        });

      // Promise.all() with rejection
      const fastPromise = Promise.resolve('Fast');
      const slowPromise = new Promise(resolve => 
        setTimeout(() => resolve('Slow'), 2000)
      );
      const failingPromise = Promise.reject('Failed');

      Promise.all([fastPromise, slowPromise, failingPromise])
        .then(results => {
          console.log(results); // Won't execute
        })
        .catch(error => {
          console.log(error); // 'Failed' - immediately
        });

      // Promise.race() - first to settle wins
      Promise.race([
        new Promise(resolve => setTimeout(() => resolve('First'), 100)),
        new Promise(resolve => setTimeout(() => resolve('Second'), 200)),
        new Promise((_, reject) => setTimeout(() => reject('Error'), 150))
      ])
      .then(result => {
        console.log(result); // 'First'
      })
      .catch(error => {
        console.log(error);
      });

      // Promise.allSettled() - waits for all, regardless of outcome
      const mixedPromises = [
        Promise.resolve('Success 1'),
        Promise.reject('Error 1'),
        Promise.resolve('Success 2'),
        Promise.reject('Error 2')
      ];

      Promise.allSettled(mixedPromises)
        .then(results => {
          results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
              console.log(\`Promise \${index}: \${result.value}\`);
            } else {
              console.log(\`Promise \${index} failed: \${result.reason}\`);
            }
          });
        });

      // Promise.any() - first successful promise (ES2021)
      Promise.any([
        Promise.reject('Error 1'),
        Promise.resolve('Success!'),
        Promise.reject('Error 2')
      ])
      .then(result => {
        console.log(result); // 'Success!'
      })
      .catch(error => {
        console.log(error); // AggregateError if all fail
      });

      // Practical example: parallel API calls
      async function fetchUserData(userId) {
        try {
          const [profile, posts, friends] = await Promise.all([
            fetch(\`/api/users/\${userId}\`).then(r => r.json()),
            fetch(\`/api/users/\${userId}/posts\`).then(r => r.json()),
            fetch(\`/api/users/\${userId}/friends\`).then(r => r.json())
          ]);
          
          return { profile, posts, friends };
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      }`,
  },
  {
    id: 24,
    type: "JavaScript",
    topic: ["memory", "garbage-collection", "performance"],
    question: "How does garbage collection work in JavaScript?",
    answer: `
      JavaScript automatically manages memory through garbage collection, which removes objects that are no longer reachable.

      Key concepts:
      - Mark-and-sweep algorithm
      - Reference counting (legacy)
      - Memory leaks prevention
      - WeakMap and WeakSet for weak references`,
    code: `
      // Reference counting example
      let obj1 = { name: 'Alice' };
      let obj2 = obj1; // Reference count: 2

      obj1 = null; // Reference count: 1
      obj2 = null; // Reference count: 0, eligible for GC

      // Circular reference problem (old engines)
      function createCircularReference() {
        const obj1 = {};
        const obj2 = {};
        
        obj1.ref = obj2;
        obj2.ref = obj1;
        
        return obj1;
      } // In old browsers, this created memory leak

      // Memory leak examples
      // 1. Global variables
      function leakyFunction() {
        // Implicit global (use strict mode to prevent)
        leakyVar = 'This becomes global';
      }

      // 2. Forgotten timers
      const intervalId = setInterval(() => {
        // This keeps references alive
        console.log('Running...');
      }, 1000);
      // clearInterval(intervalId); // Don't forget to clear!

      // 3. Event listeners not removed
      function setupEventListener() {
        const element = document.getElementById('button');
        const data = new Array(1000000).fill('data');
        
        element.addEventListener('click', function() {
          console.log(data.length); // Keeps 'data' in memory
        });
        
        // Should remove listener when done
        // element.removeEventListener('click', handler);
      }

      // 4. Closures holding references
      function createClosures() {
        const largeObject = new Array(1000000).fill('data');
        
        return function() {
          // Even if we don't use largeObject,
          // it's kept in memory due to closure
          console.log('Hello');
        };
      }

      // Better approach - nullify references
      function createClosuresBetter() {
        let largeObject = new Array(1000000).fill('data');
        
        return function(shouldCleanup) {
          if (shouldCleanup) {
            largeObject = null; // Release reference
          }
          console.log('Hello');
        };
      }

      // WeakMap for weak references
      const weakMap = new WeakMap();
      let key = {};

      weakMap.set(key, 'value');
      console.log(weakMap.get(key)); // 'value'

      key = null; // Object can be garbage collected
      // weakMap entry is automatically removed

      // WeakSet example
      const weakSet = new WeakSet();
      let obj = { id: 1 };

      weakSet.add(obj);
      console.log(weakSet.has(obj)); // true

      obj = null; // Object can be garbage collected
      // weakSet entry is automatically removed

      // Memory management best practices
      function goodMemoryManagement() {
        // 1. Use local variables when possible
        function processData() {
          const data = generateLargeData();
          return processLargeData(data);
          // 'data' is eligible for GC when function exits
        }
        
        // 2. Remove event listeners
        const controller = new AbortController();
        
        element.addEventListener('click', handler, {
          signal: controller.signal
        });
        
        // Later: controller.abort(); // Removes all listeners
        
        // 3. Clear intervals/timeouts
        const timer = setTimeout(callback, 1000);
        // clearTimeout(timer); when needed
      }`,
  },
  {
    id: 25,
    type: "JavaScript",
    topic: ["set", "map", "data-structures"],
    question: "Explain Set and Map data structures in JavaScript",
    answer: `
      Set and Map are ES6 data structures that provide alternatives to arrays and objects with unique characteristics.

      Set:
      - Stores unique values of any type
      - Maintains insertion order
      - No key-value pairs, just values

      Map:
      - Stores key-value pairs with any type of keys
      - Maintains insertion order
      - Size property and iteration methods`,
    code: `
      // Set examples
      const mySet = new Set();

      // Adding values
      mySet.add(1);
      mySet.add(2);
      mySet.add(2); // Duplicate, won't be added
      mySet.add('hello');
      mySet.add({ name: 'Alice' });

      console.log(mySet.size); // 4
      console.log(mySet.has(1)); // true
      console.log(mySet.has(3)); // false

      // Set from array (removes duplicates)
      const numbers = [1, 2, 2, 3, 3, 4, 5];
      const uniqueNumbers = new Set(numbers);
      console.log([...uniqueNumbers]); // [1, 2, 3, 4, 5]

      // Set operations
      const set1 = new Set([1, 2, 3]);
      const set2 = new Set([3, 4, 5]);

      // Union
      const union = new Set([...set1, ...set2]);
      console.log(union); // Set {1, 2, 3, 4, 5}

      // Intersection
      const intersection = new Set([...set1].filter(x => set2.has(x)));
      console.log(intersection); // Set {3}

      // Difference
      const difference = new Set([...set1].filter(x => !set2.has(x)));
      console.log(difference); // Set {1, 2}

      // Iterating over Set
      mySet.forEach(value => {
        console.log(value);
      });

      for (const value of mySet) {
        console.log(value);
      }

      // Map examples
      const myMap = new Map();

      // Setting key-value pairs
      myMap.set('string', 'value');
      myMap.set(1, 'number key');
      myMap.set(true, 'boolean key');

      const objKey = { id: 1 };
      myMap.set(objKey, 'object key');

      console.log(myMap.size); // 4
      console.log(myMap.get('string')); // 'value'
      console.log(myMap.get(objKey)); // 'object key'

      // Map from array of pairs
      const userRoles = new Map([
        ['alice', 'admin'],
        ['bob', 'user'],
        ['charlie', 'moderator']
      ]);

      // Checking existence
      console.log(userRoles.has('alice')); // true

      // Deleting entries
      userRoles.delete('bob');
      console.log(userRoles.has('bob')); // false

      // Iterating over Map
      userRoles.forEach((value, key) => {
        console.log(\`\${key}: \${value}\`);
      });

      // Destructuring in for...of
      for (const [key, value] of userRoles) {
        console.log(\`\${key}: \${value}\`);
      }

      // Map methods
      console.log([...userRoles.keys()]);   // ['alice', 'charlie']
      console.log([...userRoles.values()]); // ['admin', 'moderator']
      console.log([...userRoles.entries()]); // [['alice', 'admin'], ['charlie', 'moderator']]

      // Object vs Map comparison
      const obj = { name: 'Alice', age: 30 };
      const map = new Map([['name', 'Alice'], ['age', 30]]);

      // Map advantages:
      // 1. Any type of keys
      map.set(1, 'number key');
      map.set(true, 'boolean key');
      map.set({}, 'object key');

      // 2. Size property
      console.log(map.size); // Direct size
      console.log(Object.keys(obj).length); // Object size

      // 3. Direct iteration
      for (const [key, value] of map) {
        console.log(key, value);
      }

      // 4. No default keys
      const cleanMap = new Map(); // No inherited properties
      const cleanObj = Object.create(null); // Need this for clean object

      // WeakSet and WeakMap
      const weakSet = new WeakSet();
      const weakMap = new WeakMap();

      let objRef = { id: 1 };
      weakSet.add(objRef);
      weakMap.set(objRef, 'metadata');

      objRef = null; // Objects can be garbage collected`,
  },
  {
    id: 26,
    type: "JavaScript",
    topic: ["generators", "iterators", "yield"],
    question: "What are generators and iterators in JavaScript?",
    answer: `
      Generators are functions that can pause and resume execution, yielding multiple values over time. Iterators are objects that define a sequence and implement the iterator protocol.

      Key features:
      - function* syntax for generators
      - yield keyword to pause execution
      - next() method to resume execution
      - Custom iteration behavior`,
    code: `
      // Basic generator function
      function* simpleGenerator() {
        yield 1;
        yield 2;
        yield 3;
      }

      const gen = simpleGenerator();
      console.log(gen.next()); // { value: 1, done: false }
      console.log(gen.next()); // { value: 2, done: false }
      console.log(gen.next()); // { value: 3, done: false }
      console.log(gen.next()); // { value: undefined, done: true }

      // Generator with infinite sequence
      function* fibonacci() {
        let a = 0, b = 1;
        while (true) {
          yield a;
          [a, b] = [b, a + b];
        }
      }

      const fib = fibonacci();
      for (let i = 0; i < 10; i++) {
        console.log(fib.next().value);
      }

      // Generator with parameters
      function* parameterizedGenerator() {
        const x = yield 'First yield';
        console.log('Received:', x);
        const y = yield 'Second yield';
        console.log('Received:', y);
        return x + y;
      }

      const paramGen = parameterizedGenerator();
      console.log(paramGen.next());        // { value: 'First yield', done: false }
      console.log(paramGen.next(10));      // Logs: 'Received: 10', returns { value: 'Second yield', done: false }
      console.log(paramGen.next(20));      // Logs: 'Received: 20', returns { value: 30, done: true }

      // Generator for range
      function* range(start, end, step = 1) {
        for (let i = start; i < end; i += step) {
          yield i;
        }
      }

      // Using generator in for...of
      for (const num of range(0, 10, 2)) {
        console.log(num); // 0, 2, 4, 6, 8
      }

      // Convert generator to array
      const rangeArray = [...range(1, 6)];
      console.log(rangeArray); // [1, 2, 3, 4, 5]

      // Async generator (ES2018)
      async function* asyncGenerator() {
        yield await fetch('/api/data1').then(r => r.json());
        yield await fetch('/api/data2').then(r => r.json());
        yield await fetch('/api/data3').then(r => r.json());
      }

      // Using async generator
      async function consumeAsyncGenerator() {
        for await (const data of asyncGenerator()) {
          console.log(data);
        }
      }

      // Custom iterator
      const iterableObject = {
        data: [1, 2, 3, 4, 5],
        
        [Symbol.iterator]() {
          let index = 0;
          const data = this.data;
          
          return {
            next() {
              if (index < data.length) {
                return { value: data[index++], done: false };
              }
              return { done: true };
            }
          };
        }
      };

      // Using custom iterator
      for (const value of iterableObject) {
        console.log(value); // 1, 2, 3, 4, 5
      }

      // Generator-based iterator (cleaner)
      const iterableWithGenerator = {
        data: [1, 2, 3, 4, 5],
        
        *[Symbol.iterator]() {
          for (const item of this.data) {
            yield item * 2; // Transform values
          }
        }
      };

      console.log([...iterableWithGenerator]); // [2, 4, 6, 8, 10]

      // Practical example: Tree traversal
      class TreeNode {
        constructor(value, children = []) {
          this.value = value;
          this.children = children;
        }
        
        *depthFirst() {
          yield this.value;
          for (const child of this.children) {
            yield* child.depthFirst();
          }
        }
        
        *breadthFirst() {
          const queue = [this];
          while (queue.length > 0) {
            const node = queue.shift();
            yield node.value;
            queue.push(...node.children);
          }
        }
      }

      const tree = new TreeNode('root', [
        new TreeNode('child1', [
          new TreeNode('grandchild1'),
          new TreeNode('grandchild2')
        ]),
        new TreeNode('child2')
      ]);

      console.log([...tree.depthFirst()]); // ['root', 'child1', 'grandchild1', 'grandchild2', 'child2']
      console.log([...tree.breadthFirst()]); // ['root', 'child1', 'child2', 'grandchild1', 'grandchild2']`,
  },
  {
    id: 27,
    type: "Behavioral",
    topic: ["teamwork", "conflict resolution"],
    question:
      "Tell me about a time you had a disagreement with a teammate. How did you handle it?",
    answer: `
      I calmly set up a private 1-on-1 to understand their perspective. 
      I focused on shared goals, clarified misunderstandings, and proposed a compromise that allowed us to meet the deadline without sacrificing quality.`,
    code: ``,
  },
  {
    id: 28,
    type: "Behavioral",
    topic: ["leadership", "initiative"],
    question:
      "Describe a situation where you had to take the lead on a project unexpectedly.",
    answer: `
      During a group capstone project our lead fell sick two weeks before the demo. 
      I created a priority list, delegated tasks based on strengths, and organized daily stand-ups to keep momentum. We delivered on time and received top marks.`,
    code: ``,
  },
  {
    id: 29,
    type: "Behavioral",
    topic: ["failure", "learning"],
    question: "Tell me about a time you failed. What did you learn?",
    answer: `
      I once underestimated how long a database migration would take and missed a milestone. I learned to buffer estimates, communicate early about risks, and implement smaller incremental migrations in the future.`,
    code: ``,
  },
  {
    id: 30,
    type: "Behavioral",
    topic: ["adaptability", "fast-paced environment"],
    question:
      "Give an example of when you had to quickly adjust to a major change at work.",
    answer: `
      Our product requirements shifted after a sudden market change. 
      I immediately re-prioritized the backlog, coordinated with the design team, and delivered an MVP with the new features within two sprints.`,
    code: ``,
  },
  {
    id: 31,
    type: "Behavioral",
    topic: ["communication", "stakeholder management"],
    question:
      "Describe a time you had to explain a complex technical concept to a non-technical stakeholder.",
    answer: `I used simple analogies and visual diagrams to explain the trade-offs of different cloud hosting options to the marketing team. They left with a clear understanding and could make an informed budget decision.`,
    code: ``,
  },
  {
    id: 32,
    type: "Behavioral",
    topic: ["time management", "prioritization"],
    question: "How do you handle multiple competing priorities?",
    answer: `I use a priority matrix (urgent/important), communicate timelines early, and break work into small milestones. This keeps critical tasks on schedule without neglecting long-term goals.`,
    code: ``,
  },
  {
    id: 33,
    type: "Behavioral",
    topic: ["mentorship", "collaboration"],
    question:
      "Have you ever helped a teammate improve their skills? What was the outcome?",
    answer: `
      I paired with a junior developer struggling with Git workflows. 
      We scheduled weekly pairing sessions and built a small internal guide. 
      Their confidence grew and code reviews became much smoother.`,
    code: ``,
  },
  {
    id: 34,
    type: "Behavioral",
    topic: ["decision making", "ethics"],
    question:
      "Describe a tough decision you had to make when the 'right' choice wasn't clear.",
    answer: `
      I had to decide whether to ship a feature with a known low-risk bug or delay a high-profile launch. After consulting QA and stakeholders, we communicated the trade-offs and delayed the launch by two days to fix it, preserving customer trust.`,
    code: ``,
  },
  {
    id: 35,
    type: "Behavioral",
    topic: ["self-introduction", "ethics"],
    question: "Tell me a bit about yourself and your background.",
    answer: `
      Hi, my name is Huy. I'm a recent graduate from UW with a degree in Computer Science, and I'm passionate about both front-end and back-end development. I love creating beautiful, performant products that deliver delightful user experiences.

      During my time at school, Java was the first programming language I learned, which gave me a strong foundation for picking up the other languages I use today.

      What drew me to computer science wasn't following any trend—it came from genuine frustration. You know those moments when you need to convert a PDF to a Word document, so you search for a tool online? Usually they're either paid services or 'free' ones that require your email and then spam you endlessly. That really bothered me, so I decided to learn programming so I could build the tools I actually wanted to use.

      Regarding my experience, during college I was actively involved in the Husky Coding Club, where we organized hackathons, mentored fellow students, and built connections within the CS community.
      
      In 2023, I had the opportunity to intern at Skipli, a company that specialized in creating websites for restaurant owners and small business owners who wanted to showcase their services online. My role involved contributing to demo projects and building webpages, as well as managing API integrations. We would reach out to potential clients, present our demos, and if they were interested, we'd develop their official websites.
      
      Earlier this year, during my senior year, I interned at Marketeq Digital, where I focused primarily on backend development using TypeScript. I worked on their main product—an AI-powered platform that helps manage job postings for developer talent. The website serves as a marketplace where companies can discover and connect with developers through the platform.
      
      These experiences gave me hands-on exposure to both client-facing projects and internal product development, which helped me understand different aspects of the software development lifecycle.
      `,
    code: ``,
  },
];

export default data;
