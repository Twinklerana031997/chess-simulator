"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
const ChessPiece_1 = require("./ChessPiece");
class King extends ChessPiece_1.ChessPiece {
    getMoves() {
        const directions = [-1, 0, 1];
        const moves = [];
        for (let dr of directions) {
            for (let dc of directions) {
                if (dr !== 0 || dc !== 0) {
                    const r = this.row + dr;
                    const c = this.col + dc;
                    if (this.isInBounds(r, c)) {
                        moves.push(ChessPiece_1.ChessPiece.indicesToPosition(r, c));
                    }
                }
            }
        }
        return moves;
    }
}
exports.King = King;
