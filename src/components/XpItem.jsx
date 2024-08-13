'use client'
import { useState } from 'react'

const ItemXp = ({ title, children, disableShowMore = false, icon }) => {
    const [state, setState] = useState(false)
    return (
        <div className="grid gap-2 fade-in-from-right">
            <h4 className="flex gap-2 text-lg">
                {icon}
                {title}
            </h4>
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
