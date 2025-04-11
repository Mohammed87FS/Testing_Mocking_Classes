const Product = require('./product');

describe('Product', () => {
  test('should create a product with correct properties', () => {
    const product = new Product('P101', 'Laptop', 999.99);
    
    expect(product.productId).toBe('P101');
    expect(product.name).toBe('Laptop');
    expect(product.price).toBe(999.99);
  });

  test('getProductInfo should return formatted product information', () => {
    const product = new Product('P101', 'Laptop', 999.99);
    
    expect(product.getProductInfo()).toBe('Product P101: Laptop ($999.99)');
  });

  test('should throw error if productId is missing', () => {
    expect(() => {
      new Product(null, 'Laptop', 999.99);
    }).toThrow('Product ID is required');
  });

  test('should throw error if name is missing', () => {
    expect(() => {
      new Product('P101', null, 999.99);
    }).toThrow('Product name is required');
  });

  test('should throw error if price is missing or invalid', () => {
    expect(() => {
      new Product('P101', 'Laptop', null);
    }).toThrow('Valid price is required');
    
    expect(() => {
      new Product('P101', 'Laptop', -1);
    }).toThrow('Price must be greater than zero');
  });
});