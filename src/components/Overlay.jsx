const Overlay = ({ onClose, children }) => {
    return (
        <div onClick={onClose} className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-80 z-50 flex items-center justify-center">
            <p>note: click somwhere to close overlay</p>
            <div>{children}</div>
        </div>
    )
}

export default Overlay
