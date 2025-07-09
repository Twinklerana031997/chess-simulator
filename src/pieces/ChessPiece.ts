export abstract class ChessPiece {
    protected row: number;
    protected col: number;
  
    constructor(position: string) {
      [this.row, this.col] = ChessPiece.positionToIndices(position);
    }
  
    static positionToIndices(pos: string): [number, number] {
      const col = pos[0].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
      const row = 8 - parseInt(pos[1], 10);
      return [row, col];
    }
  
    static indicesToPosition(row: number, col: number): string {
      return `${String.fromCharCode(col + 65)}${8 - row}`;
    }
  
    protected isInBounds(r: number, c: number): boolean {
      return r >= 0 && r < 8 && c >= 0 && c < 8;
    }
  
    abstract getMoves(): string[];
  }
  