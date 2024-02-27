import React from 'react';
import listContext from "./listContext";
import { useState } from "react";

export default function ListContextProvider({children}) {

    const [list, setList] = useState([]);

    function addItem(listEntry) {
        const entryValue = listEntry.trim();
        
        if (!entryValue) return;

        const contains = list.find( item => {
            return (
                item.value.toLowerCase() === entryValue.toLowerCase()
            )
        });

        if (contains) return;

        const listItem = {
            id : `item-${entryValue}`,
            value: entryValue
        }
        setList([...list, listItem ]);
    }

    function removeItem(itemId) {
        setList( list.filter( item => {
            return (item.id != itemId)
        }));
    }

    function clearList() {
        setList([]);
    }

    return (
        < listContext.Provider value={{list, addItem, removeItem, clearList}} >
            {children}
        </listContext.Provider>
    )
}