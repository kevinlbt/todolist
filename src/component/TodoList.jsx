import React, { useCallback, useState, useEffect } from "react";
import {List} from './List'

function ButtonAdd ({onClick}) {

    return <button onClick={onClick} className="transition ease-in-out delay-100 justify-center rounded-md bg-amber-600 mb-8 py-2 px-8 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-110 focus-visible:outline-indigo-500">Add</button>
}

function Input ({name,value,onChange}) {

    return <label className="w-2/4 my-4 text-lg font-medium text-center text-black">
            {name} :
            <input type="text" name={name} id={name} value={value} onChange={onChange} className="mt-2 w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"/>
        </label>
   
}

export function TodoList () {

    const [inputText, TextChange] = useState("");
    const [todoListData,ListDataChange] = useState(localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [] );  

    function handleChange (e) {
        e.preventDefault();
        TextChange(e.target.value)
    }

    const handleAdd = useCallback( function () {
        if (todoListData.includes(inputText)) {
            ListDataChange(todoListData);
        }else {
            ListDataChange([...todoListData,inputText]);
        }
    },[todoListData,inputText])

    const handleRemove = useCallback(function (e) {
        e.preventDefault();
        let array = [...todoListData]; // make a separate copy of the array
        let index = array.indexOf(e.target.id);
        if (index !== -1) {
            array.splice(index, 1);
            ListDataChange(array);
        }
    },[todoListData])

    useEffect(() => {
        console.log("hello")
        localStorage.setItem('items', JSON.stringify(todoListData));
    }, [todoListData]); 

    return <div className="container mx-auto my-10 flex flex-col justify-center items-center border rounded-xl bg-slate-200">
        <Input name="Todo List" value={inputText} onChange={handleChange} />
        <ButtonAdd onClick={handleAdd} />
        <List todoVal={todoListData} onClick={handleRemove} /> 
    </div>
}