class Product {
    constructor(productId, name, price) {
      if (!productId) {
        throw new Error('Product ID is required');
      }
      
      if (!name) {
        throw new Error('Product name is required');
      }
      
      if (price === null || price === undefined) {
        throw new Error('Valid price is required');
      }
      
      if (price <= 0) {
        throw new Error('Price must be greater than zero');
      }
      
      this.productId = productId;
      this.name = name;
      this.price = price;
    }
    
    getProductInfo() {
      return `Product ${this.productId}: ${this.name} ($${this.price})`;
    }
  }
  
  module.exports = Product;