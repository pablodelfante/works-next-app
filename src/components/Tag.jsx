const Tag = ({ children }) => {
    return (
        <div className="text-white text-xs font-medium truncate px-2 py-1 bg-gradient-to-r from-slate-600 to-slate-400 select-none hover:via-slate-400 rounded-full">
            {children}
        </div>
    )
}

export default Tag
