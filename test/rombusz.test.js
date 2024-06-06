import assert from "assert";
import {calcPerimeter, calcArea} from "../app/rombusz.js";

describe("Rombusz kerülete", function ()  {
    it("30 bemenetre 120 vár", function() {
        const actual = calcPerimeter(30);
        const expected = 120;
        assert.equal(actual, expected);
    })
    it("5 bemenetre 20 vár", function() {
        const actual = calcPerimeter(5);
        const expected = 20;
        assert.equal(actual, expected);
    })
})