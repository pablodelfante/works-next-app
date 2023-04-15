function MacWindow({ children }) {
    return (
        <div className="bg-slate-500 dark:bg-gray-50 rounded-lg shadow-lg overflow-clip">
            <div className="flex gap-1 p-2">
                <div className="rounded-full bg-red-500 w-3 h-3" />
                <div className="rounded-full bg-yellow-400 w-3 h-3" />
                <div className="rounded-full bg-green-500 w-3 h-3" />
            </div>
            {children}
        </div>
    )
}

export default MacWindow
