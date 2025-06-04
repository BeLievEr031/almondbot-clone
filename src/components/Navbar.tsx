function Navbar() {
    return (
        <nav className="border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <a className="flex items-center gap-2" href="/">
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
                </a>
                <div className="hidden sm:flex items-center gap-6">
                    <a
                        className="text-sm font-bold hover:text-accent transition-colors"
                        href="/machine-tending"
                    >
                        Machine Tending
                    </a>
                    <a
                        className="text-sm font-bold hover:text-accent transition-colors"
                        href="/pick-and-place"
                    >
                        Pick &amp; Place
                    </a>
                    <a
                        className="text-sm font-bold hover:text-accent transition-colors"
                        href="/inspection"
                    >
                        Inspection
                    </a>
                    <a
                        className="text-sm font-bold hover:text-accent transition-colors"
                        href="/contact"
                    >
                        Contact
                    </a>
                </div>
                <button className="sm:hidden p-2 hover:text-accent transition-colors">
                    <div className="relative w-6 h-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-x absolute h-6 w-6 transition-all duration-300 opacity-0 -rotate-90"
                            aria-hidden="true"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-menu absolute h-6 w-6 transition-all duration-300 opacity-100 rotate-0"
                            aria-hidden="true"
                        >
                            <line x1={4} x2={20} y1={12} y2={12} />
                            <line x1={4} x2={20} y1={6} y2={6} />
                            <line x1={4} x2={20} y1={18} y2={18} />
                        </svg>
                    </div>
                </button>
                <div className="fixed top-16 left-0 right-0 bottom-0 z-40 sm:hidden transition-[opacity,visibility] duration-300 opacity-0 invisible">
                    <div className="absolute inset-0 bg-background" />
                    <div className="absolute top-0 left-0 right-0 bg-background border-b">
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            <a
                                className="text-sm font-bold hover:text-accent transition-colors py-2"
                                href="/machine-tending"
                            >
                                Machine Tending
                            </a>
                            <a
                                className="text-sm font-bold hover:text-accent transition-colors py-2"
                                href="/pick-and-place"
                            >
                                Pick &amp; Place
                            </a>
                            <a
                                className="text-sm font-bold hover:text-accent transition-colors py-2"
                                href="/inspection"
                            >
                                Inspection
                            </a>
                            <a
                                className="text-sm font-bold hover:text-accent transition-colors py-2"
                                href="/contact"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    )
}

export default Navbar