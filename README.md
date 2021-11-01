# One Contract Many Instances Subgraph

This is a proof of concept for indexing events/calls from many addresses of the same contract.

## Contract code:

```javascript
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract POC{
    event Thanks(address _address, uint _amount);
    
    fallback() external payable{
        emit Thanks(msg.sender, msg.value);
    }
}
```

## Vision:
We basically need to write a script to automate the following workflow:
- Listen for the deployment of new contracts of type POC.sol
- Add contract address and startBlock (and other data.. same for every instance) to [subgraph.yaml](./subgraph.yaml)
- Run `yarn deploy`


## Instances:
- [0xd8a9585fd631b97f8c3c6443fb358769884ce87f](https://rinkeby.etherscan.io/address/0xd8a9585fd631b97f8c3c6443fb358769884ce87f)
- [0xd50f1ff36fa56f8340b8cb77a4fcaf1759dacb39](https://rinkeby.etherscan.io/address/0xd50f1ff36fa56f8340b8cb77a4fcaf1759dacb39)

## Subgraph: 
https://thegraph.com/hosted-service/subgraph/t0mcr8se/one-contract-many-instances

## Result:
It works, am I smart or what?

## TODO:
- test for calls
