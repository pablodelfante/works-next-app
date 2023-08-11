'use client'
import { useState } from 'react'

const Overlay = ({ children, content }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)
    return (
        <>
            <div
                onClick={() => {
                    setIsOverlayOpen(true)
                }}
            >
                {children}
            </div>
            {isOverlayOpen && (
                <div
                    onClick={() => {
                        setIsOverlayOpen(false)
                    }}
                    className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-80 z-50 flex items-center justify-center"
                >
                    {content}
                </div>
            )}
        </>
    )
}

export default Overlay
