/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers')
const ALCHEMY_API_KEY = "mMCjgy2yisA5vldM2fs-KKZ7iRIjoELL";
const MUMBAI_API_KEY = "bf1eec40dac91a26fd7f4a5bbc6b35556b2bf9d755dc70b7905a6a451206af23";

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [MUMBAI_API_KEY]
    }
  }
};
