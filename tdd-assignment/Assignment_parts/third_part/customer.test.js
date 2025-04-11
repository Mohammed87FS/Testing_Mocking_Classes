const Customer = require('./customer');

describe('Customer', () => {
  test('should create a customer with correct properties', () => {
    const customer = new Customer('123', 'John Doe', 'john@example.com');
    
    expect(customer.customerId).toBe('123');
    expect(customer.name).toBe('John Doe');
    expect(customer.email).toBe('john@example.com');
  });

  test('getCustomerInfo should return formatted customer information', () => {
    const customer = new Customer('123', 'John Doe', 'john@example.com');
    
    expect(customer.getCustomerInfo()).toBe('Customer 123: John Doe <john@example.com>');
  });

  test('should throw error if customerId is missing', () => {
    expect(() => {
      new Customer(null, 'John Doe', 'john@example.com');
    }).toThrow('Customer ID is required');
  });

  test('should throw error if name is missing', () => {
    expect(() => {
      new Customer('123', null, 'john@example.com');
    }).toThrow('Customer name is required');
  });

  test('should throw error if email is missing or invalid', () => {
    expect(() => {
      new Customer('123', 'John Doe', null);
    }).toThrow('Valid email is required');
    
    expect(() => {
      new Customer('123', 'John Doe', 'invalid-email');
    }).toThrow('Valid email is required');
  });
});