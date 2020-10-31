class customer {
    constructor(id, name, email, phone, billDate, billAmount ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.billDate = billDate;
      this.billAmount = billAmount;
    }
  
   
  
    display() {
      return `${this.id} with a name as ${this.name} with email ${this.email} on ${this.billDate} has been charged with ${this.billAmount}`;
    }
  }
  
   
  
  class custManager {
    constructor() {
      this.customers = [];
    }
    addCustomer(emp) {
      if (emp == null) throw "Customer not found";
      this.customers.push(emp);
    }
    removeCustomer(id) {
      for (let index = 0; index < this.customers.length; index++) {
        const element = this.customers[index];
        if (element.id == id) {
          this.customers.splice(index, 1);
          return;
        }
      }
      throw "Customer not found to delete";
    }
  
   
  
    updateCustomer(emp) {
      let selected = this.customers.find((e) => e.id == emp.id);
      if (selected == undefined) 
        throw "Customer not found to update";
      selected.name = emp.name;
      selected.address = emp.address;
    }

    grtAllCustomers(){
        return this.customers;
    }

    getCustomer(id){
        return this.customers.find((e)=>e.id == id);
    }
  }