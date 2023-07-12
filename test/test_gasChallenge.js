const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Deploy Gas Challenge Contract", () => {
  let gas_contract;

  beforeEach(async () => {
    const gas_challenge_contract = await ethers.getContractFactory(
      "gasChallenge"
    );
    gas_contract = await gas_challenge_contract.deploy();
  });

  describe("Compute Gas", () => {
    it("Should return lower gas", async () => {
      await gas_contract.notOptimizedFunction();
      await gas_contract.optimizedFunction();
    });
  });

  describe("Check Sum Of Array", () => {
    it("Should return 0", async () => {
      // Write test block here to check sum of array equals 0
      // Call the optimizedFunction to set all elements of the array to 0
      await gas_contract.optimizedFunction();

      // Call the getSumOfArray function to retrieve the sum
      const sum = await gas_contract.getSumOfArray();

      // Assert that the sum is equal to 0
      expect(sum).to.equal(0);
    });
  });
});
