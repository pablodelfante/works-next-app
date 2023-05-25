import MacWindow from 'components/MacWindow'

export default function Terminal({ children, init }) {
    const TerminalStartPrompt = ({ init }) => (
        <p>
            <span className="text-green-500 dark:text-green-500">pabla@code:~$</span>
            <span className="text-white"> {init}</span>
        </p>
    )
    return (
        <MacWindow>
            <div className="bg-dark p-4">
                <TerminalStartPrompt {...{ init }} />
                <span className="text-white">{children}</span>
                <TerminalStartPrompt />
            </div>
        </MacWindow>
    )
}
