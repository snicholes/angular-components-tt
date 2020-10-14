import { HeldItem } from './helditem';
import { Move } from './move';

export class Pokemon {
    id: number;
    name: string;
    held_items: HeldItem[];
    sprites: {};
    abilities: [];
    types: [];
    moves: Move[];
}
