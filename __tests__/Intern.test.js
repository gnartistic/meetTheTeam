const Intern = require("../lib/Intern");

describe("Intern", () => {
    test('intern class contains name, id, email, school', () => {
        // creates a test for the Intern class
        const obj = new Intern();

        expect("employeeName" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("school" in obj).toEqual(true);
    })

    test('you can get the school name using the constructor', () => {
        const test = "University of Never Stop Testing" // lololol
        const obj = new Intern("name", "id", "email", test);

        expect(obj.school).toEqual(test);
    })

    test('the class name returns "Intern"', () => {
        const obj = new Intern();

        expect(obj.constructor.name).toEqual("Intern");
    })

    test('getSchool() returns their school', () => {
        const test = "UTSA bootcamp" // hey that's my school!
        const obj = new Intern("name", "id", "email", test);

        expect(obj.getSchool()).toEqual(test);
    })

    test('getRole() returns their role', () => {
        const obj = new Intern();

        expect(obj.getRole()).toEqual("Intern");
    })
});
