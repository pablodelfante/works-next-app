// create basic slider
import React from 'react'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Slider = ({ slides }) => {
    const developItems = ['a', 'b']
    return (
        <div className="grid grid-cols-3">
            <ChevronLeftIcon className="w-6 h-6" />
            <ul>
                {developItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ChevronRightIcon className="w-6 h-6" />
        </div>
    )
}

export default Slider
