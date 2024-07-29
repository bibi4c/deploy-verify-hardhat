require("@nomicfoundation/hardhat-toolbox");
const { vars } = require("hardhat/config");

const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");
const MNEMONIC = process.env.MNEMONIC || 'demo music thumb unique chat sand crew more leg another off lamp'
const url = process.env.KEEPER_RPC_URL
const fs = require('fs');

function readSecretFile() {
  try {
    const secret = fs.readFileSync('.secret', 'utf-8').trim();
    return secret;
  } catch (error) {
    console.error('Error reading .secret file:', error);
    return null;
  }
}

const accounts = {
  mnemonic: MNEMONIC
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: 'sandv-testnet',
  // defaultNetwork: 'hub-testnet',
  // defaultNetwork: 'tcgverse',
  networks: {
    'sandv-testnet': {
      url: 'https://rpc.sandverse.oasys.games/',
      chainId: 20197,
      accounts: [readSecretFile()],
      gas: 6 * 1000000000000,
      gasPrice: 0,
    },
    'tcgverse': {
      accounts: [readSecretFile()],
      url: 'https://rpc.tcgverse.xyz',
      chainId: 2400,
      gas: 2033679,
      gasPrice: 1000000007,
    },
    'hub-testnet': {
      accounts: [readSecretFile()],
      url: 'https://rpc.testnet.oasys.games/',
      chainId: 9372,
      gas: 2033679,
      gasPrice: 1000000007,
    },
    local: {
      url: 'http://localhost:8545',
      timeout: 200000
    },
    'geth-localnet': {
      url: url || 'http://localhost:8545',
      accounts,
      chainId: 1337,
      skipDryRun: true,
      //            gas: 4000000,
      //            gasPrice: 0,
      from: '0xe2DD09d719Da89e5a3D0F2549c7E24566e947260'
    },
    'geth-setup': {
      url: url || 'http://localhost:8545',
      chainId: 1337
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    customChains: [
      {
        network: 'sandv-testnet',
        chainId: 20197,
        urls: {
          apiURL: 'https://sandv.explorer-v6-oasys.net/api',
          browserURL: 'https://sandv.explorer-v6-oasys.net'
        }
      },
      {
        network: 'hub-testnet',
        chainId: 9372,
        urls: {
          apiURL: 'https://explorer.testnet.oasys.games/api',
          browserURL: 'https://explorer.testnet.oasys.games/'
        }
      },
      {
        network: 'tcgverse',
        chainId: 2400,
        urls: {
          apiURL: 'https://tcg-mainnet.explorer-v6-oasys.net/api',
          browserURL: 'https://tcg-mainnet.explorer-v6-oasys.net'
        }
      },
    ],
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
};
