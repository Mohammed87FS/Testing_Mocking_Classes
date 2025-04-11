// order.refactored.js
/**
 * Represents an order in the system
 * 
 * This class follows the Single Responsibility Principle and uses
 * dependency injection to reduce coupling with its dependencies.
 */
class Order {
  /**
   * Creates a new Order instance
   * 
   * @param {string} orderId - The unique identifier for the order
   * @param {Customer} customer - The customer placing the order
   * @param {Product} product - The product being ordered
   * @param {number} quantity - The quantity of the product being ordered
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
   * @param {string} orderId - The order ID to validate
   * @throws {Error} If the order ID is invalid
   */
  validateOrderId(orderId) {
    if (!orderId) {
      throw new Error('Order ID is required');
    }
  }
  
  /**
   * Validates the customer
   * 
   * @param {Customer} customer - The customer to validate
   * @throws {Error} If the customer is invalid
   */
  validateCustomer(customer) {
    if (!customer) {
      throw new Error('Customer is required');
    }
    
    // Ensure customer has required methods
    if (typeof customer.getCustomerInfo !== 'function') {
      throw new Error('Customer must implement getCustomerInfo method');
    }
  }
  
  /**
   * Validates the product
   * 
   * @param {Product} product - The product to validate
   * @throws {Error} If the product is invalid
   */
  validateProduct(product) {
    if (!product) {
      throw new Error('Product is required');
    }
    
    // Ensure product has required methods and properties
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
   * @param {number} quantity - The quantity to validate
   * @throws {Error} If the quantity is invalid
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
   * @returns {number} The total cost
   */
  calculateTotalCost() {
    return this.quantity * this.product.price;
  }
  
  /**
   * Formats the total cost as a currency string
   * 
   * @returns {string} The formatted total cost
   */
  formatTotalCost() {
    return this.calculateTotalCost().toFixed(2);
  }
  
  /**
   * Generates the customer part of the order summary
   * 
   * @returns {string} The customer information
   */
  getCustomerSummary() {
    return this.customer.getCustomerInfo();
  }
  
  /**
   * Generates the product part of the order summary
   * 
   * @returns {string} The product information
   */
  getProductSummary() {
    return `${this.quantity} x ${this.product.getProductInfo()}`;
  }
  
  /**
   * Generates a complete summary of the order
   * 
   * @returns {string} The complete order summary
   */
  generateOrderSummary() {
    const customerInfo = this.getCustomerSummary();
    const productInfo = this.getProductSummary();
    const totalCost = this.formatTotalCost();
    
    return `Order ${this.orderId}: ${customerInfo} purchased ${productInfo}. Total: $${totalCost}`;
  }
}

module.exports = Order;