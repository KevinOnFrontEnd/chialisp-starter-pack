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

You are able to write and deploy smart contracts in a number of programming languages   . For this starter pack,the preferred way is Javascript/Node. 

- [NodeJS](https://nodejs.org/en/download) - If your preferred method of interacting with contracts is Javascript.
- [chia reference wallet](https://www.chia.net/downloads/)
- [visual code editor](https://code.visualstudio.com)
- [chialisp visual code extension](https://marketplace.visualstudio.com/items?itemName=ChiaNetwork.chialisp) - Will give syntax highlighting for your chialisp programs.
- [Mainnet database](https://torrents.chia.net/databases/mainnet/mainnet.2024-10-09.tar.gz.torrent) - Required when publishing your program on mainnet
- [Testnet11 database](https://torrents.chia.net/databases/testnet11/testnet11.2024-10-09.tar.gz.torrent) - This starter pack will assume you are using testnet11. 

### npm packages
- clvm_tools
```bash
npm -i clvm_tools
```

- chia-utils
```bash
npm -i chia-utils
```


## What is Chialisp

Chialisp is a smart contract programming language used on the [Chia blockchain](https://www.chia.net). 

## Deploying a smart contract


## Interacting with Smart Contracts
Interacting with a smart contract involves a program that provides a solution to the puzzle (program) that you have developed - i.e the parameters that the puzzle requires. This code is called the driver code. Each puzzle will have its own driver code and can be wrote in JS/Python or Rust.

## Terms & Abbreviations
| **Term**       | **Definition**                                                                 |
|-----------------|-------------------------------------------------------------------------------|
| **Testnet**     | A testing network used for experimenting and development without real funds. |
| **Mainnet**     | The live blockchain where actual transactions and data are recorded.         |
| **Block**       | A fundamental unit of data storage in a blockchain.                          |
| **Puzzle**      | A smart contract or condition that locks a coin.                             |
| **Solution**    | The input that satisfies a puzzle's conditions to unlock a coin.             |
| **Driver code** | Code (in Python, JS, Rust, etc.) that interacts with puzzles and solutions.   |
| **Mojo**        | The smallest unit of Chia (1 XCH = 1,000,000,000,000 Mojo).


## Links
[Official Chia GitHub](https://github.com/Chia-Network)

## Contributors
This is a list of people who have contributed to making this starter pack.
