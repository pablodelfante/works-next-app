import Link from "next/link";
import { useContext, useEffect } from "react";
import DarkContext from "../../contexts/darkMode/DarkContext";

export default function Header() {
    const { dark, setDark, icono, setIcono, sun, moon } =
        useContext(DarkContext);

    useEffect(() => {
        const html = document.getElementsByTagName("html")[0];
        html.className = dark ? "dark" : "";
    }, [dark]);

    const switchMode = () => {
        setDark(!dark);
    };

    return (
        <>
            <header className="border-b">
                <ul className="flex justify-end gap-3 md:gap-10 py-10">
                    <li className="mr-auto">
                        <Link href="/">
                            <a>HOME</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio">
                            <a>PORTFOLIO</a>
                        </Link>
                    </li>
                    <li onClick={() => switchMode()} className="cursor-pointer">
                        {icono}
                    </li>
                </ul>
            </header>
        </>
    );
}
