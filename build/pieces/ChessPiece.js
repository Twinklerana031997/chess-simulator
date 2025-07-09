"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessPiece = void 0;
class ChessPiece {
    constructor(position) {
        [this.row, this.col] = ChessPiece.positionToIndices(position);
    }
    static positionToIndices(pos) {
        const col = pos[0].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
        const row = 8 - parseInt(pos[1], 10);
        return [row, col];
    }
    static indicesToPosition(row, col) {
        return `${String.fromCharCode(col + 65)}${8 - row}`;
    }
    isInBounds(r, c) {
        return r >= 0 && r < 8 && c >= 0 && c < 8;
    }
}
exports.ChessPiece = ChessPiece;
