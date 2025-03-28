'use client'
import React, { useState, useRef } from 'react'

const Tooltip = ({ content, children }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false)
    const timeoutRef = useRef(null)

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current)
        setIsTooltipVisible(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsTooltipVisible(false)
        }, 100)
    }

    return (
        <div className="relative inline-block">
            <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {children}
            </div>
            {isTooltipVisible && (
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute bottom-full left-1/2 mb-2 transform -translate-x-1/2 bg-gray-800 text-xs rounded"
                >
                    {content}
                </div>
            )}
        </div>
    )
}

export default Tooltip
