const Router = artifacts.require("WindfallRouter.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, _network, addresses) {
  let weth;
  const FACTORY_ADDRESS = '0xd5365c2Ab4D2791C009CDC6818Cda1A4D2F87865';

  if( _network == 'mainnet' ){
    weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
  } else if( _network == 'ropsten' ){
    weth = await WETH.at('0xc778417E063141139Fce010982780140Aa0cD5Ab')
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
