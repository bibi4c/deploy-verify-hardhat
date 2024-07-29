// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const [signer] = await hre.ethers.getSigners();

  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.parseEther("0.001");

  // const LockFactory = await hre.ethers.getContractFactory("Lock");


  // ikeda-san
  const TestTokenFactory = await ethers.getContractFactory(
      'TestToken',
  );
  console.log("__deploy.js__24__")
  const testToken = await TestTokenFactory.deploy();
  console.log("__deploy.js__26__")
  await testToken.deployed();
  console.log("__deploy.js__28__")
  // console.log('TestToken deployed to: ', testToken.address);


  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.connect(signer).deploy(unlockTime, {
  //   value: lockedAmount,
  // });
  // const lock = await Lock.deploy(unlockTime, {
  //   value: lockedAmount,
  // });

  // await lock.deployed().then((contract) => {
  //   return contract.deployTransaction.wait({ gasLimit: 6000000 });
  // });

  // const contract = (await Lock.connect(signer).deploy(unlockTime, {
  //   value: lockedAmount,
  //   gasLimit: 80000000,
  // }));
  // await contract.deployed();
  //
  // console.log(
  //   `Lock with ${hre.ethers.utils.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${contract.target}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
