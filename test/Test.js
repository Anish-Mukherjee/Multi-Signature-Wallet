const { inputToConfig } = require("@ethereum-waffle/compiler");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Multi Signature Wallet Tests',()=>{

  let Token;
  let MultiSig;
  let owner1;
  let owner2;
  let owner3;
  let owner4;
  let addrs;

  beforeEach(async()=>{
    Token = await ethers.getContractFactory("MultiSig");
    [owner1,owner2,owner3,owner4,...addrs] = await ethers.getSigners();
    MultiSig = await Token.deploy([owner1.address,owner2.address,owner3.address,owner4.address],3);
    await MultiSig.deployed()
  })

  describe("Contract initialization",()=>{
    it("Should return the list of its owners",async()=>{
      expect(await MultiSig.getOwners()).to.equal(await MultiSig.owners())
    })
  })
})
