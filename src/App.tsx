import React, {useEffect, useState} from "react";
import "./App.css";
import {ItemList} from "./components";
import {Item} from "./models";
import {fetchItems, swapItems} from "./api/ItemsAPI";

function App() {
    const [items, setItems] = useState<Item[]>([]);
    const getItems = () => {
        fetchItems().then(items => setItems(items));
    }
    const onItemSwap = (itemA: Item, itemB: Item) => {
        swapItems(itemA, itemB).then(() => getItems());
    };

    useEffect(() => {
        getItems();
    }, []);
    
    if (!items) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="App">
            <ItemList items={items} onItemSwap={onItemSwap}></ItemList>
        </div>
    );
}

export default App;
