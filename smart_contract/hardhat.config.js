require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/VFcQqjSiGy0uBM9enL6XjFX58mj3N-NW',
      accounts: ['4fc8f430968407c985dee81c3d4031f898b72b15e1f31f64480caa1114078fa7'],
    },
  },
};