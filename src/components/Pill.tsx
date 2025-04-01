import { ReactNode } from 'react';

interface PillProps {
    children: ReactNode;
    type?: 'outline' | 'default';
    onClick?: () => void;
}

const Pill = ({ children, type = 'default', onClick }: PillProps) => {
    if (type === 'outline') {
        return (
            <div
                onClick={onClick}
                className="flex gap-1 text-primary dark:text-white text-xs font-medium truncate px-2 py-1 border border-primary rounded-full hover:bg-primary hover:text-white transition select-none group"
            >
                {children}
            </div>
        )
    }

    return (
        <div
            onClick={onClick}
            className="flex gap-1 text-white text-xs font-medium truncate px-2 py-1 bg-primary rounded-full select-none hover:bg-transparent hover:border-primary dark:hover:text-white border border-transparent hover:border hover:text-primary transition group"
        >
            {children}
        </div>
    )
}

export default Pill 