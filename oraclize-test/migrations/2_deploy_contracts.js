var OraclizeTest = artifacts.require("./OraclizeTest.sol");

module.exports = function (deployer, network, accounts) {
  // deployer.deploy(ConvertLib)
  // deployer.link(ConvertLib, MetaCoin)
  // deployer.deploy(MetaCoin)
  deployer.deploy(
    OraclizeTest,
    { from: accounts[9], gas:6721975, value: 500000000000000000 }
  );
};


