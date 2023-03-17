import React, { useState } from "react";

function Checked ({id, onIfDoneChange, checked}) {

    const [ifDone,ifDoneChange] = useState(checked);

    function handleDoneChange (e) {
        ifDoneChange(!ifDone);
        onIfDoneChange(e,!ifDone);
        let text = e.target.parentElement.children[1]
        if(!ifDone) {
            text.className = "line-through decoration-black decoration-4"
        }else {
            text.className = "no-underline"
        }
   }
   
    return <input type="checkbox" id={id} checked={checked} onChange={handleDoneChange} className="h-5 w-6 mx-4 cursor-pointer rounded border-amber-300 text-amber-600 focus:ring-amber-600"/>
}

export function List ({todoVal, onClick, onIfDoneChange}) {

    return <table className="w-2/4 mb-8 table-auto border-separate rounded-2xl border-spacing-2 border-stone-500 bg-slate-700 shadow-2xl">
            <thead>
            <tr>
                <th className="p-4 text-3xl text-white border-b-2">Task</th>
            </tr>
            </thead>
            <tbody>
                {todoVal.map((v) => 
                <tr key={v.id}>
                    <td className="flex py-3 mt-2 justify-between text-white text-lg font-sans font-medium items-center border-none">
                        <Checked id={v.id} checked={v.idDone} onIfDoneChange={onIfDoneChange} />
                        { v.idDone ? <p className="line-through decoration-black decoration-4">{v.text}</p> : <p className="no-underline">{v.text}</p> }
                        <button onClick={onClick} id={v.id} className="cursor-pointer ml-4 mr-2 text-sm text-red-700">X</button>
                    </td>
                </tr>)}         
            </tbody>
        </table>
 }