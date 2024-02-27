import React from "react";
import { useContext } from "react";
import listContext from "../context/listContext/listContext";
import ListItem from "./ListItem";

export default function ListContainer() {

    const {list, clearList} = useContext(listContext);

    return (
        <>
            <div className="list-container">

            <button {...{id: 'clear-list'}} onClick={clearList}>Clear List</button>

                {
                    list.length > 0 && (
                        
                        list.map( listItem => {                            
                            
                            return (
                                < ListItem 
                                    key={listItem.id}
                                    itemId={listItem.id}
                                    itemValue={listItem.value}
                                />
                            )
                        })
                    )
                }
            </div>
        </>
    )
}