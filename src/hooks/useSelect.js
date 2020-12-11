import React, { useState } from 'react';

const useSelect = (stateInicial,opciones) => {



    // state del custom hooks
    const [state,actualizarState] = useState('')

    const SelectNoticias = () => ( 
        <select
            className='browser-default'
            value={state}
            onChange={e => actualizarState(e.target.value)}
            style={{marginBottom:'10px'}}
        >
            {opciones.map((option)=>(
                <option 
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    )

    return [state,SelectNoticias]
}
 
export default useSelect;


// url 9964a666e5f443e298488676ed8a1424