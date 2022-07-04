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

    test('engineer class contains name, id, email, github', () => {
        // test to see if you can set their github username using the constructor
        const test = "testest"
        const obj = new Engineer("name", "id", "email", test);

        expect(obj.github).toEqual(test);
    })

    test('engineer class contains name, id, email, github', () => {
        // testing to see if the class name returns "Engineer"
        const obj = new Engineer();

        expect(obj.constructor.name).toEqual("Engineer");
    })

    // test to see if getGitHub() returns github username
    test('should return engineer github when called', () => {
        const test = "gnartistic"; // hey! that's me haha
        const obj = new Engineer("name", "id", "email", test);

        expect(obj.getGitHub()).toEqual(test);
    })

    // test to see if getRole() returns their role
    test('should return engineer role when called', () => {
        const obj = new Engineer();
        expect(obj.getRole()).toEqual("Engineer");
    })
})