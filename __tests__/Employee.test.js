const Employee = require("../lib.Employee");

describe("Employee", () => {
    // creates a test for employee
    test('should return an object containing "employeeName, id, email, avatar" property when called with the "new" keyword',
        () => {
            const object = new Employee();
            //employeeName, id, email, avatar
            expect("employeeName" in object).toEqual(true);
            expect("id" in object).toEqual(true);
            expect("email" in object).toEqual(true);
            expect("avatar" in object).toEqual(true);
        })
    
    // test to see if type of new emploee is an object
    test('should become an object when use new employee', () => {
        const object = new Employee();

        expect(typeof object).toEqual("object");
    })

    // test if i can set name via constructor
    test('should set employee name equal to 1st param', () => {
        
    })

})