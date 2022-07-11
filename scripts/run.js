const hre = require("hardhat");

const main = async () => {
  const multiSigFactory = await hre.ethers.getContractFactory("MultiSig");
  const [owner, addr1, addr2, addr3, ...addrs] = await hre.ethers.getSigners();
  const multiSig = await multiSigFactory.deploy(
    [owner.address, addr1.address, addr2.address, addr3.address],
    3
  );
  await multiSig.deployed();

  console.log("Contract successfully deployed at : ", multiSig.address);

  const owners = await multiSig.getOwners();
  console.log("The owners of the wallet are : ", owners);
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
