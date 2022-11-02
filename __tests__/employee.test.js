const employee = require('../lib/employee');

describe("employee", () => {
    describe("Initialization", () => {
        it("Should return a new 'employee' object", () => {
            const testE = new employee();
            
            expect(testE instanceof employee).toEqual(true);
        });

        
    })
})