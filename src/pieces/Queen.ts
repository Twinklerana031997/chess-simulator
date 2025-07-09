import { ChessPiece } from './ChessPiece';

export class Queen extends ChessPiece {
  getMoves(): string[] {
    const moves: string[] = [];
    const directions: [number, number][] = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],          [0, 1],
      [1, -1],  [1, 0], [1, 1],
    ];

    for (let [dr, dc] of directions) {
      let r = this.row + dr;
      let c = this.col + dc;
      while (this.isInBounds(r, c)) {
        moves.push(ChessPiece.indicesToPosition(r, c));
        r += dr;
        c += dc;
      }
    }

    return moves;
  }
}
