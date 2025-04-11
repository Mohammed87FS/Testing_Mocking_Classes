const Order = require('../fourth_part/order.refactored');

describe('Order with Mocks', () => {
  let mockCustomer;
  let mockProduct;
  
  beforeEach(() => {
   
    mockCustomer = {
      customerId: '123',
      name: 'John Doe',
      email: 'john@example.com',
      getCustomerInfo: jest.fn(() => 'Customer 123: John Doe <john@example.com>')
    };
    
   
    mockProduct = {
      productId: 'P101',
      name: 'Laptop',
      price: 999.99,
      getProductInfo: jest.fn(() => 'Product P101: Laptop ($999.99)')
    };
  });

  test('should create an order with mocked dependencies', () => {
    const order = new Order('O1001', mockCustomer, mockProduct, 2);
    
    expect(order.orderId).toBe('O1001');
    expect(order.customer).toBe(mockCustomer);
    expect(order.product).toBe(mockProduct);
    expect(order.quantity).toBe(2);
  });


  test('should throw error if quantity is not an integer', () => {
    expect(() => {
      new Order('O1001', mockCustomer, mockProduct, 2.5);
    }).toThrow('Quantity must be an integer');
  });


  test('generateOrderSummary should call customer.getCustomerInfo', () => {
    const order = new Order('O1001', mockCustomer, mockProduct, 2);
    order.generateOrderSummary();
    
    expect(mockCustomer.getCustomerInfo).toHaveBeenCalled();
  });

  test('generateOrderSummary should call product.getProductInfo', () => {
    const order = new Order('O1001', mockCustomer, mockProduct, 2);
    order.generateOrderSummary();
    
    expect(mockProduct.getProductInfo).toHaveBeenCalled();
  });

  test('generateOrderSummary should calculate total cost correctly', () => {
    const order = new Order('O1001', mockCustomer, mockProduct, 2);
    const expectedTotal = 2 * 999.99;
    

    const calculateTotalCostSpy = jest.spyOn(order, 'calculateTotalCost');
    
    order.generateOrderSummary();
    
    expect(calculateTotalCostSpy).toHaveBeenCalled();
    expect(calculateTotalCostSpy).toHaveReturnedWith(expectedTotal);
    

    calculateTotalCostSpy.mockRestore();
  });

  test('generateOrderSummary should return correct order summary with mocks', () => {
    const order = new Order('O1001', mockCustomer, mockProduct, 2);
    const expectedSummary = 'Order O1001: Customer 123: John Doe <john@example.com> purchased 2 x Product P101: Laptop ($999.99). Total: $1999.98';
    
    expect(order.generateOrderSummary()).toBe(expectedSummary);
    expect(mockCustomer.getCustomerInfo).toHaveBeenCalledTimes(1);
    expect(mockProduct.getProductInfo).toHaveBeenCalledTimes(1);
  });
});