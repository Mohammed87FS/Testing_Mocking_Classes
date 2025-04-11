
const Order = require('../fourth_part/order.refactored');

describe('Refactored Order with Mocks', () => {
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

  describe('Constructor validation', () => {
    test('should throw error for invalid customer (missing getCustomerInfo method)', () => {
      const invalidCustomer = { customerId: '123', name: 'John Doe', email: 'john@example.com' };
    
      
      expect(() => {
        new Order('O1001', invalidCustomer, mockProduct, 2);
      }).toThrow('Customer must implement getCustomerInfo method');
    });

    test('should throw error for invalid product (missing getProductInfo method)', () => {
      const invalidProduct = { productId: 'P101', name: 'Laptop', price: 999.99 };
  
      
      expect(() => {
        new Order('O1001', mockCustomer, invalidProduct, 2);
      }).toThrow('Product must implement getProductInfo method');
    });

    test('should throw error for invalid product (missing price property)', () => {
      const invalidProduct = { 
        productId: 'P101', 
        name: 'Laptop',
        getProductInfo: jest.fn()
      };
 
      
      expect(() => {
        new Order('O1001', mockCustomer, invalidProduct, 2);
      }).toThrow('Product must have a valid price');
    });
  });

  describe('Helper methods', () => {
    test('calculateTotalCost should return correct total', () => {
      const order = new Order('O1001', mockCustomer, mockProduct, 2);
      expect(order.calculateTotalCost()).toBe(1999.98);
    });

    test('formatTotalCost should return formatted total', () => {
      const order = new Order('O1001', mockCustomer, mockProduct, 2);
      expect(order.formatTotalCost()).toBe('1999.98');
    });

    test('getCustomerSummary should call customer.getCustomerInfo', () => {
      const order = new Order('O1001', mockCustomer, mockProduct, 2);
      order.getCustomerSummary();
      expect(mockCustomer.getCustomerInfo).toHaveBeenCalled();
    });

    test('getProductSummary should call product.getProductInfo', () => {
      const order = new Order('O1001', mockCustomer, mockProduct, 2);
      order.getProductSummary();
      expect(mockProduct.getProductInfo).toHaveBeenCalled();
    });
  });

  describe('generateOrderSummary', () => {
    test('should return correct order summary using helper methods', () => {
      const order = new Order('O1001', mockCustomer, mockProduct, 2);
      
    
      const getCustomerSummarySpy = jest.spyOn(order, 'getCustomerSummary');
      const getProductSummarySpy = jest.spyOn(order, 'getProductSummary');
      const formatTotalCostSpy = jest.spyOn(order, 'formatTotalCost');
      
      const expectedSummary = 'Order O1001: Customer 123: John Doe <john@example.com> purchased 2 x Product P101: Laptop ($999.99). Total: $1999.98';
      
      expect(order.generateOrderSummary()).toBe(expectedSummary);
      
   
      expect(getCustomerSummarySpy).toHaveBeenCalled();
      expect(getProductSummarySpy).toHaveBeenCalled();
      expect(formatTotalCostSpy).toHaveBeenCalled();
      
     
      getCustomerSummarySpy.mockRestore();
      getProductSummarySpy.mockRestore();
      formatTotalCostSpy.mockRestore();
    });
  });
});