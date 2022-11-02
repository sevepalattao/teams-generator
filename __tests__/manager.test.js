const manager = require('../lib/manager');

xdescribe("manager", () => {
    describe("Initialization", () => {
        it("Should return a new 'manager' object", () => {
            const testE = new manager();
            expect(testE instanceof manager).toEqual(true);
        });
    })
})