import { Item } from "../models";
import { SingleItem } from "./SingleItem";
import React from "react";

export type ItemListProps = {
    items: Array<Item>
    onItemSwap(itemA: Item, itemB: Item): void
};

export const ItemList = ({items, onItemSwap}: ItemListProps) => {
    return (
        <div>
            {items.map((item, i) => {
                const hasPrevItem = i-1 in items;
                const hasNextItem = i+1 in items;
                
                return <SingleItem key={item.id}
                                    prevItem={hasPrevItem && items[i-1]}
                                    item={item}
                                    nextItem={hasNextItem && items[i+1]}
                                    onItemSwap={onItemSwap}></SingleItem>
            })}
        </div>
    );
};