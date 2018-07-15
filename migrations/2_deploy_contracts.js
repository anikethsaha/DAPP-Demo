var helloworld = artifacts.require("./helloworld.sol");
var wallet = artifacts.require("./wallet.sol");
module.exports = function(deployer) {
  deployer.deploy(helloworld).then(() => console.log(helloworld.address))

  deployer.deploy(wallet).then(() => console.log("wallet address",wallet.address))
};
