import { useContext } from "react";
import listContext from "../context/listContext/listContext";
import React from 'react';

export default function InputForm() {

    const {addItem} = useContext(listContext)

    function submitHandler(e) {
        e.preventDefault();

        const form = e.target;
        const input = form.input;

        addItem(input.value);

        form.reset();
    }

    return (

        <form className="input-form" onSubmit={(e)=>submitHandler(e)}>

            <input {...{id: 'shopping-input'}} type="text" name="input" placeholder='Add list item'/>
            <button type="submit">Add</button>
        </form>
    )
}