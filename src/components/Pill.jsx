const Pill = ({ children, type }) => {
    if (type === 'outline') {
        return (
            <div className="flex gap-1 text-primary dark:text-white text-xs font-medium truncate px-2 py-1 border border-primary rounded-full hover:bg-primary hover:text-white transition select-none">
                {children}
            </div>
        )
    }

    return (
        <div className="flex gap-1 text-white text-xs font-medium truncate px-2 py-1 bg-primary rounded-full select-none hover:bg-transparent hover:border-primary dark:hover:text-white border border-transparent hover:border hover:text-primary transition">
            {children}
        </div>
    )
}

export default Pill
