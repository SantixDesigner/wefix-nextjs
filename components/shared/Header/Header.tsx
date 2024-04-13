import Image from "next/image"
import Link from "next/link"
import '../../../app/globals.css'
import './header.css'
export const Header = () => {
    return(
        <header className="flex bg-black text-white">
            <Image src={'/images/wefix.jpg'} alt="wefix" width={100} height={100} className="rounded-full"/>
            <nav className="ms-auto mt-8 nav">
                <ul className="flex">
                    <li>
                        <Link href='/'>Sobre Nosotros</Link>
                    </li>
                    <li>
                        <Link href='/'>Servicios</Link>
                    </li>
                    <li>
                        <Link href='/contacto'>Contáctanos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}