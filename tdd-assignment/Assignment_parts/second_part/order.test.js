const Order = require('./order');
const Customer = require('./customer');
const Product = require('./product');

describe('Order', () => {
  let customer;
  let product;
  
  beforeEach(() => {
    customer = new Customer('123', 'John Doe', 'john@example.com');
    product = new Product('P101', 'Laptop', 999.99);
  });

  test('should create an order with correct properties', () => {
    const order = new Order('O1001', customer, product, 2);
    
    expect(order.orderId).toBe('O1001');
    expect(order.customer).toBe(customer);
    expect(order.product).toBe(product);
    expect(order.quantity).toBe(2);
  });

  test('generateOrderSummary should return correct order summary', () => {
    const order = new Order('O1001', customer, product, 2);
    const expectedSummary = 'Order O1001: Customer 123: John Doe <john@example.com> purchased 2 x Product P101: Laptop ($999.99). Total: $1999.98';
    
    expect(order.generateOrderSummary()).toBe(expectedSummary);
  });

  test('should throw error if orderId is missing', () => {
    expect(() => {
      new Order(null, customer, product, 2);
    }).toThrow('Order ID is required');
  });

  test('should throw error if customer is missing', () => {
    expect(() => {
      new Order('O1001', null, product, 2);
    }).toThrow('Customer is required');
  });

  test('should throw error if product is missing', () => {
    expect(() => {
      new Order('O1001', customer, null, 2);
    }).toThrow('Product is required');
  });

  test('should throw error if quantity is missing or invalid', () => {
    expect(() => {
      new Order('O1001', customer, product, null);
    }).toThrow('Valid quantity is required');
    
    expect(() => {
      new Order('O1001', customer, product, 0);
    }).toThrow('Quantity must be greater than zero');
    
    expect(() => {
      new Order('O1001', customer, product, -1);
    }).toThrow('Quantity must be greater than zero');
    
    expect(() => {
      new Order('O1001', customer, product, 1.5);
    }).toThrow('Quantity must be an integer');
  });
});