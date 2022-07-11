const hre = require("hardhat");

const main = async () => {
  const multiSigFactory = await hre.ethers.getContractFactory("MultiSig");
  const [addr1, addr2, addr3, addr4] = [
    "0xCbf606d3cCC65dF69A08a16Ed8c6B07A9950431c",
    "0xD80a0528bD01574F8438989aA8e70a616DAaf6cc",
    "0x8e0104386c1412DbB4BCdD229CB89C502c603aeE",
    "0x91ee78f4Eaba79F661FbE7FE993Dbe41d573ff22",
  ];
  const multiSig = await multiSigFactory.deploy([addr1,addr2,addr3,addr4],3);
  await multiSig.deployed();

  console.log("Multi sig wallet deployed to address : ", multiSig.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

runMain();
