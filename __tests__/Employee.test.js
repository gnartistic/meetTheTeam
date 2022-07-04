const Employee = require("../lib/Employee");

describe("Employee", () => {
    test('should return an object containing "employeeName, id, email" property when called with the "new" keyword',
        () => {
            const obj = new Employee();
            //employeeName, id, email, avatar
            expect("employeeName" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        })
    
    test('should become an object when use new employee', () => {
        const obj = new Employee();

        expect(typeof obj).toEqual("object");
    })

    // test if i can set name via constructor
    test('should set employee name equal to first parameter', () => {
        const test = "Tanjiro"; // demon slayer hehehehe
        const obj = new Employee(test);

        expect(obj.employeeName).toEqual(test);
    })

    // test if I can set id via constructor
    test('should set employee id equal to second parameter', () => {
        const test = "2222"; //lucky angel numbers, hope this test works aha
        const obj = new Employee('name', test);

        expect(obj.id).toEqual(test);
    })

    // test to see if i can set email via constructor
    test('should set employee email equal to third parameter', () => {
        const test = "iLoveTacos@whyImFat.com" // not a lie, the tacos in arizona just dont smack like the ones in san antonio :(
        const obj = new Employee('email', 'id', test);

        expect(obj.email).toEqual(test);
    })
})


// creating tests for methods //

test('class name returns "Employee"', () => {
    const obj = new Employee();

    expect(obj.constructor.name).toEqual("Employee");
})

test('getName() returns a name', () => {
    const test = "Yuji"; // jujitsu kaisen ref
    const obj = new Employee(test);

    expect(obj.getName()).toEqual(test);
})

test('getId() returns their ID', () => {
    const test = "7777"; // now THIS mf is lucky af
    const obj = new Employee("name", test);

    expect(obj.getId()).toEqual(test);
})

test('getEmail() returns their email', () => {
    const test = "iHateAvacados@plsDontJudgeMe.com" // i really do, whoever called them nature's butter was wrong
    const obj = new Employee("name", "id", test);

    expect(obj.getEmail()).toEqual(test);
})

test('getRole() returns their role', () => {
    const obj = new Employee;

    expect(obj.getRole()).toEqual("Employee");
});