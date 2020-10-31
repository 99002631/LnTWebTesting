describe("Suite to test classes", () => {
    let emp = null;
    
    beforeAll(() => {
    console.log("This function runs first");
    });
    beforeEach(() => {
    emp = new customer(123, "Aman", "mishra.amankumar@gmail.com", "31/10/2020",1200);
    });
    afterEach(() => {
    emp = null;
    });
    afterAll(() => {
    console.log("This function runs at the last");
    });
    
    it("should set id", () => {
    expect(emp.id).toBe(123);
    });
    
    it("should set name", () => {
    expect(emp.name).toBe("Aman");
    });
    
    it("should set email", () => {
    expect(emp.email).toBe("mishra.amankumar@gmail.com");
    });

    it("should set date", () => {
    expect(emp.billDate).toBe("31/10/2020");
    });

    it("should set bill amount", () => {
    expect(emp.billAmount).toBe(1200);
    });

   });
    
   describe("Testing for custManager", () => {
    let mgr = null;
    beforeAll(() => {
    mgr = new custManager();
    console.log("This function runs first");
    });
    
    it("should not allow undefined values to be added", () => {
    let emp;
    expect(mgr.addCustomer(emp)).toThrow("customer not found");
    });
    
    it("should add the customer", () => {
    mgr.addCustomer(new custManager(123, "Aman", "mishra.amankumar@gmail.com", "31/10/2020",1200));
    expect(mgr.customers.length).toBe(1);
    });
    
    it("should remove the customer", () => {
    mgr.addCustomer(new custManager(123, "Aman", "mishra.amankumar@gmail.com", "31/10/2020",1200));
    mgr.removeCustomer("123");
    expect(mgr.customers.length).toBe(0);
    });

    it("should updatecustRecord", () => {
        const emp = new customer(123, "Aman Kumar Mishra", "mishra.amankumar@gmail.com", "31/10/2020",1200)
        mgr.updateCustomer(emp)
        expect(mgr.customers).not.toContain(new customer(123, "Aman", "mishra.amankumar@gmail.com"));
   });
});
