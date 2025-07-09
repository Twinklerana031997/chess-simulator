"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const ChessPiece_1 = require("./ChessPiece");
class Queen extends ChessPiece_1.ChessPiece {
    getMoves() {
        const moves = [];
        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1],
        ];
        for (let [dr, dc] of directions) {
            let r = this.row + dr;
            let c = this.col + dc;
            while (this.isInBounds(r, c)) {
                moves.push(ChessPiece_1.ChessPiece.indicesToPosition(r, c));
                r += dr;
                c += dc;
            }
        }
        return moves;
    }
}
exports.Queen = Queen;
