const intern = require('../lib/intern');

xdescribe("intern", () => {
    describe("Initialization", () => {
        it("Should return a new 'intern' object", () => {
            const testE = new intern();
            expect(testE instanceof intern).toEqual(true);
        });
    })
})