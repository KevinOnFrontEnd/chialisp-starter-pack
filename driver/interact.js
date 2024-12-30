
import fs from "fs";
import pkg from "clvm-lib";

const { Program } = pkg;

(async () => {
    try {
        // Define Chialisp source code
        const clspCode = fs.readFileSync("sum.clsp", "utf8");

        // Parse the Chialisp source code
        const program = Program.fromSource(clspCode);

        // Compile the program
        const compiledOutput = program.compile();
        const compiledPuzzle = compiledOutput.value.toString();
        const puzzleHash = compiledOutput.value.hashHex();

        console.log("Compiled CLVM Puzzle:");
        console.log(compiledPuzzle);

        console.log("Puzzle hash:");
        console.log(puzzleHash);

        //solution
        const solution = Program.fromSource("(5)");

        // get the compiled CLVM source representation
        const output = compiledOutput.value.run(solution);
        console.log("Compiled CLVM Source:");
        console.log(output.value.toString());
    } catch (error) {
        console.error("Error compiling the contract:", error);
    }
})();
