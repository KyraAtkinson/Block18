const multiplication = require("./index.js");

describe("multiplication test", () => {
    test("product of 2 * 3 should return 6",  () => {
        expect(multiplication.product(2, 3)).toBe(6);
    });
});
