import React, { useState } from 'react'

const Tooltip = ({ content, children }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false)

    return (
        <div className="relative inline-block">
            <div className="cursor-pointer" onMouseEnter={() => setIsTooltipVisible(true)} onMouseLeave={() => setIsTooltipVisible(false)}>
                {children}
            </div>
            {isTooltipVisible && (
                <div
                    onMouseEnter={() => setIsTooltipVisible(true)}
                    className="absolute bottom-full left-1/2 mb-2 transform -translate-x-1/2 bg-gray-800 p-4 text-xs"
                >
                    {content}
                </div>
            )}
        </div>
    )
}

export default Tooltip
