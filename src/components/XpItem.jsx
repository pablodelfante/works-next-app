'use client'
import { useState } from 'react'

const ItemXp = ({ title, children, disableShowMore = false, icon }) => {
    const [showMore, setShowMore] = useState(false)
    return (
        <div className="grid gap-2 on-view:fade-in-from-right">
            <h4 className="flex gap-2 text-lg">
                {icon}
                {title}
            </h4>
            {children(showMore)}
            {!disableShowMore && (
                <span className="block font-light cursor-pointer underline py-2 select-none" onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'show less' : 'show more'}
                </span>
            )}
        </div>
    )
}

export default ItemXp
