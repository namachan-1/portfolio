"use client";

import "./Navbar.css"
import Link from "next/link";

const Navbar = () => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <header className="sticky-nav fixed top-8 right-0 z-10 max-w-1440px bg-white shadow-lg border-r-2 p-1">
            <nav className="nav-wrapper p-2">
                <div
                    className="nav-links flex justify-end items-center"
                >
                    <ul className="nav-list flex flex-row gap-8 px-3" role="navigation">
                        <li><Link href="#projects" className="nav-item" onClick={() => scrollToSection('projects')}>Projects</Link></li>
                        <li><Link href="#skills" className="nav-item" onClick={() => scrollToSection('skills')} scroll={false}>Skills</Link></li>
                        <li><Link href="#about" className="nav-item" onClick={() => scrollToSection('about')}>About</Link></li>
                        <li><Link href="#resume" className="nav-item" onClick={() => scrollToSection('resume')} scroll={false}>Resume</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;