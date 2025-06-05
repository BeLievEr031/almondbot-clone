import { LucideMenu, LucideX } from "lucide-react"
import { useState } from "react";
import { Link } from "react-router-dom"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link className="flex items-center gap-2" to="/">
                    <div className="relative w-[40px] h-[40px]">
                        <img
                            alt="Almond Logo"
                            decoding="async"
                            data-nimg="fill"
                            className="object-contain"
                            style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0,
                                color: "transparent"
                            }}
                            src="https://almondbot.com/almond.svg"
                        />
                    </div>
                    <span className="text-lg font-semibold">Almond</span>
                </Link>
                <div className="hidden sm:flex items-center gap-6">
                    <Link
                        className="text-sm font-bold  transition-colors"
                        to="/machine-tending"
                    >
                        Machine Tending
                    </Link>
                    <Link
                        className="text-sm font-bold  transition-colors"
                        to="/pick-and-place"
                    >
                        Pick &amp; Place
                    </Link>
                    <Link
                        className="text-sm font-bold  transition-colors"
                        to="/inspection"
                    >
                        Inspection
                    </Link>
                    <Link
                        className="text-sm font-bold  transition-colors"
                        to="/contact"
                    >
                        Contact
                    </Link>
                </div>
                <button
                    className="sm:hidden p-2 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-6 transition-transform duration-300">
                        {isOpen ? (
                            <LucideX color="white" className="w-6 h-6 rotate-0 scale-100 transition-transform duration-300" />
                        ) : (
                            <LucideMenu color="white" className="w-6 h-6 rotate-0 scale-100 transition-transform duration-300" />
                        )}
                    </div>
                </button>

                <div
                    className={`fixed top-16 left-0 right-0 bottom-0 z-40 transition-all duration-300 sm:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    <div className="absolute inset-0 bg-background" />
                    <div className="absolute top-0 left-0 right-0 bg-background/10 border-b">
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4 bg-background">
                            <Link
                                className="text-sm font-bold transition-colors py-2"
                                to="/machine-tending"
                                onClick={() => setIsOpen(false)}
                            >
                                Machine Tending
                            </Link>
                            <Link
                                className="text-sm font-bold transition-colors py-2"
                                to="/pick-and-place"
                                onClick={() => setIsOpen(false)}
                            >
                                Pick &amp; Place
                            </Link>
                            <Link
                                className="text-sm font-bold transition-colors py-2"
                                to="/inspection"
                                onClick={() => setIsOpen(false)}
                            >
                                Inspection
                            </Link>
                            <Link
                                className="text-sm font-bold transition-colors py-2"
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    )
}

export default Navbar