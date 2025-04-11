
class Customer {
    constructor(customerId, name, email) {
      if (!customerId) {
        throw new Error('Customer ID is required');
      }
      
      if (!name) {
        throw new Error('Customer name is required');
      }
      
      if (!email || !this.isValidEmail(email)) {
        throw new Error('Valid email is required');
      }
      
      this.customerId = customerId;
      this.name = name;
      this.email = email;
    }
    
    isValidEmail(email) {
     
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    getCustomerInfo() {
      return `Customer ${this.customerId}: ${this.name} <${this.email}>`;
    }
  }
  
  module.exports = Customer;