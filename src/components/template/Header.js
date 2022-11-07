import Link from "next/link";
import { useContext, useEffect } from "react";
import DarkContext from "../../contexts/darkMode/DarkContext";

export default function Header() {
    const { dark, setDark, icono, setIcono, sun, moon } =
        useContext(DarkContext);

    useEffect(() => {
        const html = document.getElementsByTagName("html")[0];
        html.className = dark ? "dark" : "";
        if (dark) {
            setIcono(moon);
        } else {
            setIcono(sun);
        }
        /* 
        solo cambia la clase en el html
        */
    }, [dark]);

    const modeDark = () => {
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
                    <li onClick={() => modeDark()} className="cursor-pointer">
                        {icono}
                    </li>
                </ul>
            </header>
        </>
    );
}
