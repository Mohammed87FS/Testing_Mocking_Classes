
class Order {
  /**
   * Creates a new Order instance
   * 
   * @param {string} orderId 
   * @param {Customer} customer 
   * @param {Product} product 
   * @param {number} quantity 
   */
  constructor(orderId, customer, product, quantity) {
    this.validateOrderId(orderId);
    this.validateCustomer(customer);
    this.validateProduct(product);
    this.validateQuantity(quantity);
    
    this.orderId = orderId;
    this.customer = customer;
    this.product = product;
    this.quantity = quantity;
  }
  
  /**
   * Validates the order ID
   * 
   * @param {string} orderId 
   * @throws {Error} 
   */
  validateOrderId(orderId) {
    if (!orderId) {
      throw new Error('Order ID is required');
    }
  }
  
  /**
   * Validates the customer
   * 
   * @param {Customer} customer 
   * @throws {Error} 
   */
  validateCustomer(customer) {
    if (!customer) {
      throw new Error('Customer is required');
    }
    
    
    if (typeof customer.getCustomerInfo !== 'function') {
      throw new Error('Customer must implement getCustomerInfo method');
    }
  }
  
  /**
   * Validates the product
   * 
   * @param {Product} product 
   * @throws {Error} 
   */
  validateProduct(product) {
    if (!product) {
      throw new Error('Product is required');
    }
    
   
    if (typeof product.getProductInfo !== 'function') {
      throw new Error('Product must implement getProductInfo method');
    }
    
    if (typeof product.price !== 'number') {
      throw new Error('Product must have a valid price');
    }
  }
  
  /**
   * Validates the quantity
   * 
   * @param {number} quantity 
   * @throws {Error} 
   */
  validateQuantity(quantity) {
    if (quantity === null || quantity === undefined) {
      throw new Error('Valid quantity is required');
    }
    
    if (!Number.isInteger(quantity)) {
      throw new Error('Quantity must be an integer');
    }
    
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than zero');
    }
  }
  
  /**
   * Calculates the total cost of the order
   * 
   * @returns {number} 
   */
  calculateTotalCost() {
    return this.quantity * this.product.price;
  }
  
  /**
   * Formats the total cost as a currency string
   * 
   * @returns {string} 
   */
  formatTotalCost() {
    return this.calculateTotalCost().toFixed(2);
  }
  
  /**
   * Generates the customer part of the order summary
   * 
   * @returns {string} 
   */
  getCustomerSummary() {
    return this.customer.getCustomerInfo();
  }
  
  /**
   * Generates the product part of the order summary
   * 
   * @returns {string} 
   */
  getProductSummary() {
    return `${this.quantity} x ${this.product.getProductInfo()}`;
  }
  
  /**
   * Generates a complete summary of the order
   * 
   * @returns {string} 
   */
  generateOrderSummary() {
    const customerInfo = this.getCustomerSummary();
    const productInfo = this.getProductSummary();
    const totalCost = this.formatTotalCost();
    
    return `Order ${this.orderId}: ${customerInfo} purchased ${productInfo}. Total: $${totalCost}`;
  }
}

module.exports = Order;