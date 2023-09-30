'use client'
function Modal({ children, onClose, onOpenInAnotherTab }) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen">
            <div className="grid justify-items-center items-center h-full w-full">
                <div className="p-3 pr-0 m-auto rounded-md bg-slate-700 w-full md:w-3/4 grid grid-flow-col grid-cols-[1fr_auto] items-center justify-center">
                    <div>{children}</div>
                    <div className="grid gap-2">
                        <div className="p-3 hover:cursor-pointer" onClick={onClose} title="click to close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="p-3 hover:cursor-pointer" onClick={onOpenInAnotherTab} title="click to open in a new tab">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
