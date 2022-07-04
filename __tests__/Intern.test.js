const Intern = require("../lib/Intern");

describe("Intern", () => {
    test('intern class contains name, id, email, school', () => {
        // creates a test for the Intern class
        const obj = new Intern();

        expect("employeeName" in obj).toEuqal(true);
        expect("id" in obj).toEuqal(true);
        expect("email" in obj).toEqual(true);
        expect("school" in obj).toEqual(true);
    })

    test('intern class contains name, id, emial, school', () => {
        // tests to see if you can get the school name using the constructor
        const test = "University of Never Stop Testing" // lololol
        const obj = new Intern("name", "id", "email", test);

        expect(obj.school).toEqual(test);
    })

    test('intern class contains name, id, email, school', () => {
        // test to see if the class name return "Intern"
        const obj = new Intern();

        expect(obj.constructor.name).toEqual("Intern");
    })

    test('should return the school when called', () => {
        const test = "UTSA bootcamp" // hey that's my school!
        const obj = new Intern("name", "id", "email", test);

        expect(obj.getSchool()).toEqual(test);
    })

    // test to see if getRole() returns their role
    test('should return the interns role when called', () => {
        const obj = new Intern();

        expect(obj.getRole()).toEqual("Intern");
    })
});
