const { inputToConfig } = require("@ethereum-waffle/compiler");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Multi Signature Wallet Tests", ()=>{

  /*let Token;
  let MultiSig;
  let owner1;
  let owner2;
  let owner3;
  let owner4;
  let addrs;

  beforeEach(async()=>{
    Token = await ethers.getContractFactory("MultiSig");
    MultiSig = await Token.deploy();
    await MultiSig.deployed();
  })*/

  describe('Contract initialization', () => {
    it("Should check if atleast 1 owner is given",async()=>{
      const Token = await ethers.getContractFactory("MultiSig")
      const [owner] = await ethers.getSigners()
      expect(await Token.deploy([owner],1)).to.equal("Atleast 1 owner required")
    })
  })
  
})
