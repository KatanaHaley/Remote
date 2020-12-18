const expect = require("chai").expect; 
const addNumbers = require("../main");
	
//test suite
	
	describe("addNumbers", {} => {
	
// test cases

it("should return the sum of two numbers added together", () => {
let a = 6;
let b = 4;

const expected = 10;

const actual = addNumbers(a,b);
expected(actual).to.equal(expected)
})

it("should return the sum of two numbers added together", () => {
    let a = 6;
    let b = 4;