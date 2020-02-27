import { Item } from './Item.model';        // Class Model

export class List {
    name: string;
    items: Item[] = [];
    isCompleted: boolean;

    constructor( name: string ) {
        this .name = name;
        this .isCompleted = false;
    }
}