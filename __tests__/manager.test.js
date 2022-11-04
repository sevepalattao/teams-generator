const manager = require('../lib/manager');

describe("manager", () => {
    describe("Initialization", () => {
        it("Should return a new 'manager' object", () => {
            const testE = new manager();
            expect(testE instanceof manager).toEqual(true);
        });

        it("Should set name, email, id, and officeNo when created", () => {
            const name = 'Seve';
            const email = 'seve@email.com';
            const id = 15;
            const officeNo = 5;

            const testE = new manager('Seve', 'seve@email.com', 15, 5);

            expect(testE.name).toEqual(name);
            expect(testE.email).toEqual(email);
            expect(testE.id).toEqual(id);
            expect(testE.officeNo).toEqual(officeNo);
        });
    });

    describe("getRole", () => {
        it("Should return role when getRole() is called on manager object", () => {
            const testE = new manager('Seve', 'seve@email.com', 15, 5);
            const role = 'Manager';
            eRole = testE.getRole();
            expect(eRole).toEqual(role);
        });
    });
});