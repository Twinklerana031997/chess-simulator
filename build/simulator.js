"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulate = simulate;
const Pawn_1 = require("./pieces/Pawn");
const King_1 = require("./pieces/King");
const Queen_1 = require("./pieces/Queen");
function simulate(input) {
    console.log("simulator file running");
    const [typeRaw, position] = input.split(',').map(x => x.trim().toLowerCase());
    switch (typeRaw) {
        case 'pawn':
            return new Pawn_1.Pawn(position).getMoves();
        case 'king':
            return new King_1.King(position).getMoves();
        case 'queen':
            return new Queen_1.Queen(position).getMoves();
        default:
            throw new Error(`Unknown piece type: ${typeRaw}`);
    }
}
if (require.main === module) {
    const input = process.argv[2];
    if (!input) {
        console.error("Usage: node build/simulator.js 'Queen, D5'");
        process.exit(1);
    }
    try {
        const result = simulate(input);
        console.log('Possible moves:', result.join(' '));
    }
    catch (e) {
        console.error('Error:', e.message);
    }
}
