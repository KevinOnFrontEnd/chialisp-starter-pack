# Chialisp Starter Pack

This repo is a collection of resources that have been collated into one place to get new **chialisp** developers onboarded to chia development. It's intended to be used as a starter pack for JS developers.

## Table of Contents
- [Prerequisites](#prerequisites)
- [What is Chialisp](#what-is-chialisp)
- [Deploying a Smart Contract](#deploying-a-smart-contract)
- [Interacting with Smart Contracts](#interacting-with-smart-contracts)
- [Terms & Abbreviations](#terms--abbreviations)
- [Links](#links)
- [Contributors](#contributors)

## Prerequisites

You are able to write and deploy smart contracts in a number of programming languages. For this starter pack,the preferred way is Javascript/Node. 

- [NodeJS](https://nodejs.org/en/download) - If your preferred method of interacting with contracts is Javascript.
- [chia reference wallet](https://www.chia.net/downloads/)
- [visual code editor](https://code.visualstudio.com)
- [chialisp visual code extension](https://marketplace.visualstudio.com/items?itemName=ChiaNetwork.chialisp) - Will give syntax highlighting for your chialisp programs.
- [Mainnet database](https://torrents.chia.net/databases/mainnet/mainnet.2024-10-09.tar.gz.torrent) - Required when publishing your program on mainnet
- [Testnet11 database](https://torrents.chia.net/databases/testnet11/testnet11.2024-10-09.tar.gz.torrent) - This starter pack will assume you are using testnet11. 
- create a .env file in driver which contains a mnemonic to your testnet11 wallet e.g.

```
mnemonic=Ths is your testnet11 wallet mnemonic that should not be shared 
```

### npm packages
There are a number of npm packages that help with the clvm in javascript. This document will use clvm. 

- clvm_tools
```bash
npm install clvm-lib
```

## What is Chialisp

Chialisp is a smart contract programming language used on the [Chia blockchain](https://www.chia.net). Chialisp is derived from lisp, and uses a subset of lisp like operators designed to work on the blockchain. You do not need to know lisp but it does help in understanding concepts such as functional programming and recursion.

## Deploying a smart contract
Deploying a contract to the network involves creating driver code in given language, to bundle your contract puzzle hash up into a *spendbundle* and sending *mojos* to that puzzle hash. Once an amount has been sent to the puzzlehash on either mainnet or testnet - the coin will show up as an unspent transaction - meaning that anyone on the network can attempt to spend the coin providing they spend conditions are met.

[deploy-contract.js](deploy-contract.js) is a simple sample driver code that publishes a chialisp program that accepts an argument and multiplies it by itself.  

**note:** this contract does not create_coin back to an address hash and will burn whatever value that is locked up in it, which is why only a small amount is locked up in the contract (0.000001 TXCH). 

## Interacting with Smart Contracts
Interacting with a smart contract involves a program that provides a solution to the puzzle (program) that you have developed - i.e the parameters that the puzzle requires. This code is called the driver code. Each puzzle will have its own driver code and can be wrote in JS/Python or Rust or using cdv.


## Terms & Abbreviations
| **Term**       | **Definition**                                                                 |
|-----------------|-------------------------------------------------------------------------------|
| **Testnet**     | A testing network used for experimenting and development without real funds. |
| **Mainnet**     | The live blockchain where actual transactions and data are recorded.         |
| **Block**       | A fundamental unit of data storage in a blockchain.                          
| **Driver code** | Code (in Python, JS, Rust, etc.) that interacts with puzzles and solutions.   |
| **Mojo**        | The smallest unit of Chia (1 XCH = 1,000,000,000,000 Mojo).
| **Puzzle**      | A smart contract or condition that locks a coin.     
| **Puzzle Solution** |  input parameters for the puzzle. The input that satisfies a puzzle's conditions to unlock a coin.    
| **Puzzle hash**     |  A hash of the puzzle (before the reveal) that serves as an address or identifier.
| **Puzzle Reveal**   | The compiled CLVM bytecode of the puzzle that gets revealed during a transaction. It proves the logic that defines how a coin can be spent or conditions can be met.  
| **Spendbundle** | A SpendBundle typically consists of a list of coin spends which is a coin, puzzle reveal & solution.             

## Links
[Official Chia GitHub](https://github.com/Chia-Network)

## Contributors
This is a list of people who have contributed to making this starter pack.
