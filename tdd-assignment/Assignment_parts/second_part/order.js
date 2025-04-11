class Order {
    constructor(orderId, customer, product, quantity) {
      if (!orderId) {
        throw new Error('Order ID is required');
      }
      
      if (!customer) {
        throw new Error('Customer is required');
      }
      
      if (!product) {
        throw new Error('Product is required');
      }
      
      if (quantity === null || quantity === undefined) {
        throw new Error('Valid quantity is required');
      }
      
      if (quantity <= 0) {
        throw new Error('Quantity must be greater than zero');
      }
      
      if (!Number.isInteger(quantity)) {
        throw new Error('Quantity must be an integer');
      }
      
      this.orderId = orderId;
      this.customer = customer;
      this.product = product;
      this.quantity = quantity;
    }
    
    generateOrderSummary() {
      const customerInfo = this.customer.getCustomerInfo();
      const productInfo = this.product.getProductInfo();
      const totalCost = this.calculateTotalCost();
      
      return `Order ${this.orderId}: ${customerInfo} purchased ${this.quantity} x ${productInfo}. Total: $${totalCost.toFixed(2)}`;
    }
    
    calculateTotalCost() {
      return this.quantity * this.product.price;
    }
  }
  
  module.exports = Order;