const engineer = require('../lib/engineer');

xdescribe("engineer", () => {
    describe("Initialization", () => {
        it("Should return a new 'engineer' object", () => {
            const testE = new engineer();
            expect(testE instanceof engineer).toEqual(true);
        });
    })
})