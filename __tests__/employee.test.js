const employee = require('../lib/employee');

describe("employee", () => {
    describe("Initialization", () => {
        it("Should return a new 'employee' object", () => {
            const testE = new employee();
            expect(testE instanceof employee).toEqual(true);
        });

        it("Should set name, email, and id when created", () => {
            const name = 'Seve';
            const email = 'seve@email.com';
            const id = 15;

            const testE = new employee('Seve', 'seve@email.com', 15);

            expect(testE.name).toEqual(name);
            expect(testE.email).toEqual(email);
            expect(testE.id).toEqual(id);
        });

        it("Should set role to 'Employee'", () => {
            const testE = new employee();
            expect(testE.role).toEqual('Employee');
        });
    });

    describe("getName", () => {
        it("Should return name when getName() is called on employee object", () => {
            const testE = new employee('Seve', 'seve@email.com', 15);

            eName = testE.getName();
            expect(eName).toEqual(testE.name);
        });
    });

    describe("getId", () => {
        it("Should return id when getId() is called on employee object", () => {
            const testE = new employee('Seve', 'seve@email.com', 15);

            eId = testE.getId();
            expect(eId).toEqual(testE.id);
        });
    });

    describe("getEmail", () => {
        it("Should return email when getEmail() is called on employee object", () => {
            const testE = new employee('Seve', 'seve@email.com', 15);

            eEmail = testE.getEmail();
            expect(eEmail).toEqual(testE.email);
        });
    });

    describe("getRole", () => {
        it("Should return role when getRole() is called on employee object", () => {
            const testE = new employee('Seve', 'seve@email.com', 15);

            eRole = testE.getRole();
            expect(eRole).toEqual(testE.role);
        });
    });
});