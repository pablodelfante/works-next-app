'use client'
import { useState } from 'react'

const ItemXp = ({ title, children, disableShowMore = false }) => {
    const [state, setState] = useState(false)
    return (
        <div className="grid gap-2">
            <h4 className="text-lg">{title}</h4>
            {children(state)}
            {!disableShowMore && (
                <span className="font-light cursor-pointer underline" onClick={() => setState(!state)}>
                    {state ? 'show less' : 'show more'}
                </span>
            )}
        </div>
    )
}

export default ItemXp
