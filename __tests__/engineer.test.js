const engineer = require('../lib/engineer');

describe("engineer", () => {
    describe("Initialization", () => {
        it("Should return a new 'engineer' object", () => {
            const testE = new engineer();
            expect(testE instanceof engineer).toEqual(true);
        });

        it("Should set name, email, id, and github when created", () => {
            const name = 'Seve';
            const email = 'seve@email.com';
            const id = 15;
            const github = 'sevepalattao';

            const testE = new engineer('Seve', 'seve@email.com', 15, 'sevepalattao');

            expect(testE.name).toEqual(name);
            expect(testE.email).toEqual(email);
            expect(testE.id).toEqual(id);
            expect(testE.github).toEqual(github);
        });
    });

    describe("getRole", () => {
        it("Should return role when getRole() is called on engineer object", () => {
            const testE = new engineer('Seve', 'seve@email.com', 15, 'sevepalattao');
            const role = 'Engineer';
            eRole = testE.getRole();
            expect(eRole).toEqual(role);
        });
    });
});