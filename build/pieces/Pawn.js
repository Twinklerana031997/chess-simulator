"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const ChessPiece_1 = require("./ChessPiece");
class Pawn extends ChessPiece_1.ChessPiece {
    getMoves() {
        const forward = this.row - 1;
        return this.isInBounds(forward, this.col)
            ? [ChessPiece_1.ChessPiece.indicesToPosition(forward, this.col)]
            : [];
    }
}
exports.Pawn = Pawn;
