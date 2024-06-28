const Pill = ({ children, type }) => {
    if (type === 'outline') {
        return (
            <div className="text-primary dark:text-white text-xs font-medium truncate px-2 py-1 border border-primary rounded-full hover:bg-primary transition select-none">
                {children}
            </div>
        )
    }

    return <div className="text-white text-xs font-medium truncate px-2 py-1 bg-primary rounded-full select-none">{children}</div>
}

export default Pill
