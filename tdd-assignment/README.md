
## Project Structure

```
tdd-assignment/
├── customer.js             # Customer class implementation
├── customer.test.js        # Tests for Customer class
├── product.js              # Product class implementation
├── product.test.js         # Tests for Product class
├── order.js                # Order class implementation
├── order.test.js           # Classical tests for Order class
├── order.mock.test.js      # Mocking tests for Order class
├── order.refactored.js     # Refactored Order class
├── order.refactored.test.js # Tests for refactored Order class
├── package.json            # Project configuration
└── README.md               # This file
```

## Setup

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

## Running Tests

Run all tests:

```bash
npm test
```

Run tests in watch mode (for development):

```bash
npm run test:watch
```

## Assignment Overview

### Part 1: Installing Testing Frameworks

- Testing Framework: Jest
- Mocking Framework: Jest's built-in mocking capabilities

### Part 2: Classical Unit Testing

Implemented three classes:

1. **Customer**: Represents a customer with ID, name, and email
2. **Product**: Represents a product with ID, name, and price
3. **Order**: Represents an order that depends on Customer and Product

Tests for each class ensure they behave as expected.

### Part 3: Mocking Techniques

Used Jest's mocking capabilities to isolate the Order class from its dependencies:

- Created mock Customer and Product objects
- Verified that Order interacts correctly with the mocked objects
- Used Jest's spy functions to verify method calls

### Part 4: Refactoring Practice

Refactored the Order class to:

- Follow the Single Responsibility Principle by extracting logic into helper methods
- Improve dependency injection by validating dependencies
- Add better validation and error handling
- Improve code readability with better method names and documentation

The tests for the refactored class verify that all functionality still works as expected while maintaining isolation from dependencies.

