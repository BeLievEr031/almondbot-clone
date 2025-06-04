
function Footer() {
    return (
        <footer className="border-t py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex gap-4">
                        <a
                            href="https://join.slack.com/t/almondcommunity/shared_invite/zt-3438k2yea-SnQMLsIhPERzERMeFuA1aA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                        >
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
                                className="lucide lucide-slack h-5 w-5"
                                aria-hidden="true"
                            >
                                <rect width={3} height={8} x={13} y={2} rx="1.5" />
                                <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
                                <rect width={3} height={8} x={8} y={14} rx="1.5" />
                                <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
                                <rect width={8} height={3} x={14} y={13} rx="1.5" />
                                <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
                                <rect width={8} height={3} x={2} y={8} rx="1.5" />
                                <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/almond-bot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                        >
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
                                className="lucide lucide-github h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/almond-inc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                        >
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
                                className="lucide lucide-linkedin h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width={4} height={12} x={2} y={9} />
                                <circle cx={4} cy={4} r={2} />
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 text-center">
                        <a
                            href="mailto:hello@almondbot.com"
                            className="hover:text-accent hover:underline transition-colors"
                        >
                            hello@almondbot.com
                        </a>
                        <span className="hidden sm:inline">•</span>
                        <a
                            className="hover:text-accent hover:underline transition-colors"
                            href="/return-policy"
                        >
                            Return Policy
                        </a>
                        <span className="hidden sm:inline">•</span>
                        <p>© Almond AI, Inc. {/* */}2025</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer