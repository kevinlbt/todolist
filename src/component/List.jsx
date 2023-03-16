import React, { useState } from "react";

function Checked () {

    const [ifDone,ifDoneChange] = useState(false);

    function handleDoneChange (e) {
        ifDoneChange(!ifDone);
        let text = e.target.parentElement.children[1]
        if(!ifDone) {
            text.className = "line-through"
        }else {
            text.className = "no-underline"
        }
   }

    return <input type="checkbox" checked={ifDone} onChange={handleDoneChange} className="h-5 w-6 mx-4 cursor-pointer rounded border-amber-300 text-amber-600 focus:ring-amber-600"/>
}


export function List ({todoVal, onClick}) {


     return <table className="w-2/4 mb-8 table-auto border-separate rounded-2xl border-spacing-2 border-stone-500 bg-slate-700 shadow-2xl">
             <thead>
             <tr>
                 <th className="p-4 text-3xl text-white border-b-2">Task</th>
             </tr>
             </thead>
             <tbody>
                 {todoVal.map((v, key) => 
                 <tr key={key}>
                     <td className="flex py-3 mt-2 justify-between text-white text-lg font-sans font-medium items-center border-none">
                         <Checked />
                         <p>{v}</p>
                         <button onClick={onClick} id={v} className="cursor-pointer ml-4 mr-2 text-sm text-red-700">X</button>
                     </td>
                 </tr>)}         
             </tbody>
         </table>
 }