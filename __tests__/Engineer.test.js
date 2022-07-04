const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    test("engineer class contains name, id, email, github", () => {
        
        //create a test for the engineer class
        const obj = new Engineer();

        expect("employeeName" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("github" in obj).toEqual(true);
    })

    test('you can set their github username using the constructor', () => {
        const test = "testest"
        const obj = new Engineer("name", "id", "email", test);

        expect(obj.github).toEqual(test);
    })

    test('class name returns "Engineer"', () => {
        const obj = new Engineer();

        expect(obj.constructor.name).toEqual("Engineer");
    })

    test('getGitHub() returns github username', () => {
        const test = "gnartistic"; // hey! that's me haha
        const obj = new Engineer("name", "id", "email", test);

        expect(obj.getGitHub()).toEqual(test);
    })

    test('getRole() returns their role', () => {
        const obj = new Engineer();
        expect(obj.getRole()).toEqual("Engineer");
    })
});