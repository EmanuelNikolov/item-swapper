import { Item } from "../models";

export type SingleItemProps = {
    prevItem: Item|false,
    item: Item,
    nextItem: Item|false,
    onItemSwap(itemA: Item, itemB: Item): void
};

export const SingleItem = ({prevItem, item, nextItem, onItemSwap}: SingleItemProps) => {
    return (
        <div className='item'>
            <p>Item #{item.id}</p>
            <p>Label: {item.label}</p>
            <div className='buttonDiv'>
                {prevItem && <button onClick={() => onItemSwap(item, prevItem)}>↑</button>}
                {nextItem && <button onClick={() => onItemSwap(item, nextItem)}>↓</button>}
            </div>
        </div>
    );
};