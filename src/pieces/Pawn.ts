import { ChessPiece } from './ChessPiece';

export class Pawn extends ChessPiece {
  getMoves(): string[] {
    const forward = this.row - 1;
    return this.isInBounds(forward, this.col)
      ? [ChessPiece.indicesToPosition(forward, this.col)]
      : [];
  }
}
