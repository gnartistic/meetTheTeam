//require Manager
const Manager = require("../lib/Manager");

describe("Manager", () => {
    test('Manager class contains name, id, email, officeNumber', () => {
        //create test on manager class
        const obj = new Manager();

        expect("employeeName" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("officeNumber" in obj).toEqual(true);
    })

    test('can set officeNumber using our constructor', () => {
        const test = "teststring"
        const obj = new Manager("name", "id", "email", test);

        expect(obj.officeNumber).toEqual(test);
    })

    test('class name returns "Manager"', () => {
        const obj = new Manager();

        expect(obj.constructor.name).toEqual("Manager");
    })

    test('getOffice() returns officeNumber', () => {
        const test = "111"
        const obj = new Manager("name", "id", "email", test);

        expect(obj.getOffice()).toEqual(test);
    })

    test('getRole() returns role', () => {
        const obj = new Manager();

        expect(obj.getRole()).toEqual("Manager");
    })
});