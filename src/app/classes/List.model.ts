import { Item } from './Item.model';        // Class Model

export class List {
    id: number;
    name: string;
    items: Item[] = [];
    isCompleted: boolean;

    constructor( name: string ) {
        this .id = new Date() .getTime();
        this .name = name;
        this .isCompleted = false;
    }
}