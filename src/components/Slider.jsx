// create basic slider
import React from 'react'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Slider = ({ slides }) => {
    const developItems = ['a', 'b']
    return (
        <div className="grid grid-cols-3 justify-items-center">
            <ChevronLeftIcon className="w-6 h-6" />
            <ul className="grid justify-center">
                {developItems.map((item, index) => (
                    <li className="col-end-1 row-end-1" key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <ChevronRightIcon className="w-6 h-6" />
        </div>
    )
}

export default Slider
