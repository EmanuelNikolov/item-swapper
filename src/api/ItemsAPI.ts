import {Item} from "../models";

export const fetchItems = async (): Promise<Item[]> => {
    const response = await fetch('/items');
    return await response.json();
}

export const swapItems = async (itemA: Item, itemB: Item): Promise<Response> => {
    const response = await fetch('/items/swap', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([itemA.id, itemB.id])
    });
    
    return await response.json();
}