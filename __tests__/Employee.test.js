const Employee = require("../lib.Employee");

describe("Employee", () => {
    // creates a test for employee
    test('should return an object containing "employeeName, id, email" property when called with the "new" keyword',
        () => {
            const object = new Employee();
            //employeeName, id, email, avatar
            expect("employeeName" in object).toEqual(true);
            expect("id" in object).toEqual(true);
            expect("email" in object).toEqual(true);
        })
    
    // test to see if type of new emploee is an object
    test('should become an object when use new employee', () => {
        const object = new Employee();

        expect(typeof object).toEqual("object");
    })

    // test if i can set name via constructor
    test('should set employee name equal to first parameter', () => {
        const test = "Tanjiro"; // demon slayer hehehehe
        const object = new Employee(test);

        expect(object.employeeName).toEqual(test);
    })

    // test if I can set id via constructor
    test('should set employee id equal to second parameter', () => {
        const test = "2222"; //lucky angel numbers, hope this test works aha
        const object = new Employee('name', test);

        expect(object.employeeName).toEqual(test);
    })

    // test to see if i can set email via constructor
    test('should set employee email equal to third parameter', () => {
        const test = "iLoveTacos@gmail.com" // not a lie, the tacos in arizona just dont smack like the ones in san antonio :(
        const object = new Employee('email', 'id', test);

        expect(object.email).toEqual(test);
    })
})