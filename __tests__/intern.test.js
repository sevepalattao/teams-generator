const intern = require('../lib/intern');

describe("intern", () => {
    describe("Initialization", () => {
        it("Should return a new 'intern' object", () => {
            const testE = new intern();
            expect(testE instanceof intern).toEqual(true);
        });

        it("Should set name, email, id, and school when created", () => {
            const name = 'Seve';
            const email = 'seve@email.com';
            const id = 15;
            const school = 'University of Minnesota';

            const testE = new intern('Seve', 'seve@email.com', 15, 'University of Minnesota');

            expect(testE.name).toEqual(name);
            expect(testE.email).toEqual(email);
            expect(testE.id).toEqual(id);
            expect(testE.school).toEqual(school);
        });
    });

    describe("getSchool", () => {
        it("Should return school when getSchool() is called on intern object", () => {
            const testE = new intern('Seve', 'seve@email.com', 15, 'University of Minnesota');
            const school = 'University of Minnesota';
            eSchool = testE.getSchool();
            expect(eSchool).toEqual(school);
        })
    })
    describe("getRole", () => {
        it("Should return role when getRole() is called on intern object", () => {
            const testE = new intern('Seve', 'seve@email.com', 15, 'University of Minnesota');
            const role = 'Intern';
            eRole = testE.getRole();
            expect(eRole).toEqual(role);
        });
    });
})