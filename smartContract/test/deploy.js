// const { expect } = require("chai");
// const { ethers } = require("hardhat");


const main = async () => {

  const Transactions = await ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to: ", transactions.address);

}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain ();