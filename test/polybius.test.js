// Write your tests here
const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("Polybius() tests", () => {
  it("Should return a string when encoding", () => {
    expect(polybius("a")).to.be.a("string");
  });
  
  it("Should main spaces throughout", () => {
    expect(polybius("a a a")).to.include(" ");
  });
  
  it("Should return false if the number of characgters is uneven", () => {
    expect(polybius("111", false)).to.be.false;
  });
  
  it("Should ignore capital letters", () => {
    expect(polybius("HEY YOU")).to.equal("325145 454354");
    expect(polybius("325145 454354", false)).to.equal("hey you");
  });
  
  it("Should have i and j equal 42, and 42 equal i/j", () => {
    expect(polybius("Jim")).to.equal("424223");
    expect(polybius("424223", false)).to.equal("i/ji/jm");
  });
});