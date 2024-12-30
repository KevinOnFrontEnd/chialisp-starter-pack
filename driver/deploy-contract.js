import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import pkg from "clvm-lib";

const { Program } = pkg;

// Load environment variables
dotenv.config();


(async () => {
    try {

        // Read Chialisp code from file
        const filePath = path.join("sum.clsp");
        const clspCode = fs.readFileSync(filePath, "utf8");

        // Parse and compile the Chialisp program
        const sexp = Program.fromText(clspCode);
        const compiled = sexp.compile();

        // Print the compiled CLVM to the console
        const puzzleHash = compiled.value.hashHex();
        console.log("Compiled CLVM (hashed Puzzle):");
        console.log(puzzleHash);

        // Initialize wallet
        const wallet = new Wallet({
            mnemonic: process.env.mnemonic, 
            network: 'testnet11',
        });
        await wallet.unlock();

        //0.000001 XCH is 1,000,000 mojos.
        const fundingAmount = 1000000; // 0.000001 in mojos

        // Get a spendable coin from the wallet
        const spendableCoins = await wallet.getUnspentCoins(1);
        if (spendableCoins.length === 0) {
            console.error('No spendable coins available.');
            return;
        }

        // Fund the contract by creating a coin with the contract's puzzle hash
        const transaction = await wallet.spendCoin({
            coin: spendableCoins[0],
            to: puzzleHash,
            amount: fundingAmount,
        });

        console.log('Transaction Submitted:', transaction);

        // Wait for transaction confirmation
        console.log('Waiting for confirmation...');
        const receipt = await wallet.waitForTransaction(transaction.id);
        console.log('Contract Funded Successfully. Transaction Confirmed:', receipt);
        console.log(`Contract Puzzle Hash (Deployed Address): ${puzzleHash}`);
    } catch (error) {
        console.error('Error deploying contract:', error);
    }
})();
