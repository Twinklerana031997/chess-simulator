import { ChessPiece } from './ChessPiece';

export class King extends ChessPiece {
  getMoves(): string[] {
    const directions = [-1, 0, 1];
    const moves: string[] = [];

    for (let dr of directions) {
      for (let dc of directions) {
        if (dr !== 0 || dc !== 0) {
          const r = this.row + dr;
          const c = this.col + dc;
          if (this.isInBounds(r, c)) {
            moves.push(ChessPiece.indicesToPosition(r, c));
          }
        }
      }
    }
    return moves;
  }
}
