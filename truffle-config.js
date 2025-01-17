require('dotenv').config();

let PrivateKeyProvider = require("truffle-privatekey-provider");

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    expanse: {
      provider: () => new PrivateKeyProvider(process.env.LIVE_PRIV_KEY, "https://node.expanse.tech/"),
      host: "https://node.expanse.tech",
      port: 9656,
      network_id: 1,
      skipDryRun: true
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      skipDryRun: true
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
       }
    }
  }
};
