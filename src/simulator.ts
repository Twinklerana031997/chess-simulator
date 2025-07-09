import { Pawn } from './pieces/Pawn';
import { King } from './pieces/King';
import { Queen } from './pieces/Queen';

export function simulate(input: string): string[] {
    console.log("simulator file running")
  const [typeRaw, position] = input.split(',').map(x => x.trim().toLowerCase());
  switch (typeRaw) {
    case 'pawn':
      return new Pawn(position).getMoves();
    case 'king':
      return new King(position).getMoves();
    case 'queen':
      return new Queen(position).getMoves();
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
  } catch (e:any) {
    console.error('Error:', e.message);
  }
}
