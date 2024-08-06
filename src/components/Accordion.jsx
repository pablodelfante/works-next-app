// src/components/Accordion.js
import React, { useState } from 'react'

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="border-b border-gray-200">
            <button className="w-full text-left px-4 py-2  hover:bg-gray-50/5 focus:outline-none" onClick={toggleAccordion}>
                {title}
            </button>
            {isOpen && (
                <div className="px-4 py-2">
                    <p>{content}</p>
                </div>
            )}
        </div>
    )
}

const Accordion = () => {
    const accordionData = [
        {
            title: 'Título 1',
            content: 'Contenido del acordeón 1.',
        },
        {
            title: 'Título 2',
            content: 'Contenido del acordeón 2.',
        },
        {
            title: 'Título 3',
            content: 'Contenido del acordeón 3.',
        },
    ]

    return (
        <div className="">
            {accordionData.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    )
}

export default Accordion
