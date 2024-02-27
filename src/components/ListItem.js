import React, { memo } from "react";
import { useContext } from "react";
import listContext from "../context/listContext/listContext";

function ListItem({itemId, itemValue}) {

    const {removeItem} = useContext(listContext);

    return (
        <div className="list-item">
            <h3>{itemValue}</h3>
            
            <button 
                id={`remove-${itemValue}`}
                onClick={()=>removeItem(itemId)}
            >Remove</button>
        </div>
    )
}

export default memo(ListItem);
