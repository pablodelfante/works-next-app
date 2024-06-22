'use client'
import { useState } from 'react'

const ItemXp = ({ title, children }) => {
    const [state, setState] = useState(false)
    return (
        <div>
            <h4>{title}</h4>
            {children(state)}
            {/* {children} */}
            <span className="cursor-pointer underline" onClick={() => setState(!state)}>
                {state ? 'show more' : 'show less'}
            </span>
        </div>
    )
}

export default ItemXp
