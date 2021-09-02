// OOP Bookstore

// Context
// We have learned Object-Oriented Programming and how class and inheritance work in JavaScript. Now, you will have a chance to check your understanding of these concepts.

// Getting Started
// All your work should be done in the index.js file. More specifically, your task is to implement the two classes: class Book and class Bookstore.
// The class declarations are already provided in the index.js file.

// Due to the testing environment set up, you should not change the name of the provided class declarations class Bookstore {} and class Book {}.

// To begin working you just need to start writing your code inside the class block, where indicated by the comment // your code here.

// Your code and submission
// To check on your progress and if you are passing the tests, you can click on the RUN TESTS button.

// In addition to this, you can reference the tests by opening the index.test.js file.

// Hint: You may want to reference the test output (in the Run Output panel) since there might be some edge cases stated in the tests, that might not be too obvious from instructions.

// Final Submission
// While taking the challenge, you can check your progress multiple times via the RUN TESTS button.

// To submit your work, you should click on the SUBMIT button. You will be asked to review your code and make a final submission. After you are done with the final submission you won't be able to resubmit your code again.

// Tasks & Objectives
// You will be working in the index.js file. The objective is to successfully implement the two classes:Book and Bookstore and pass all of the provided tests.

// 1. Create the classes with their properties
// Create two classes: Book and Bookstore.

// Hint: These two classes are not extending each other, they are just 2 separate classes.

// The Book class

// The Book class will be used to create object instances that represent books. Each book will have a title and the quantity of the books available in the book store. It should have the following properties in the constructor() method:

// Should receive 2 arguments in the constructor (title, quantity).
// Should have a title property, with the value title assigned to it.
// Should have a quantity property, with the value quantity assigned to it.

// The Bookstore class

// The Bookstore class will be used to create object instances that represent book stores. Each book store will have a name and the list of books it has in its inventory.
// It should have the following properties in the constructor() method:

// Should receive 1 argument in the constructor (name).
// Should have a name property, with the name argument value assigned to it.
// Should have a books property, with an empty array value [ ] assigned to it.

// 2. Create methods

// The class Book method
// Once finished with implementing the basic structure of both classes you should move on to create the methods required on Book class.

// The Book class should have only one method:

// changeTitle:
// Should be a function.
// Should receive 1 argument, a new title string.
// Should update the title property and set the new title.

// The class Bookstore methods
// The next step is to create the required method for the Bookstore class.

// The Bookstore class should have the following methods:

// storeBook:

// Should be a function.
// Should receive 1 argument, a book object (book).
// Should add a received book object to the books array.
// getBook:

// Should be a function.
// Should receive 1 argument, a book title (title).
// Should check if the book with the given title exists in the books array and return it if found.
// Should return false if the book with the given title can't be found in the books array.
// getAllBooks:

// Should be a function.
// Should return the books array.

// Good luck!

// -Your Ironhack team

class Bookstore {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  storeBook(book) {
    this.books.push(book);
  }

  getBook(title) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === title) {
        return this.books[i];
      }
    }
    return false;
  }

  getAllBooks() {
    return this.books;
  }
}

class Book {
  constructor(title, quantity) {
    this.title = title;
    this.quantity = quantity;
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }
}
