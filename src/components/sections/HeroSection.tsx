import RoboArmImgSrc from "../../assets/roboarm.png"

function HeroSection() {
    return (
        <section className="container mx-auto px-4 pt-4 sm:pt-8 md:pt-16">
            <div className="flex flex-col items-center text-center">
                <h1
                    className="text-5xl font-bold tracking-tight mb-6"
                    style={{ animation: "pulse 3s ease-in-out infinite" }}
                >
                    Hire an AI robot for $7/hr
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-12">
                    One low setup fee and a hourly robotic employee
                </p>
                <img
                    alt="Bot"
                    loading="lazy"
                    width={500}
                    height={0}
                    decoding="async"
                    data-nimg={1}
                    className="mb-6"
                    style={{ color: "transparent" }}
                    src={RoboArmImgSrc}
                />
                <div className="flex gap-4 mb-12">
                    <button
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary shadow-xs hover:bg-primary/90 h-10 rounded-md has-[>svg]:px-4 cursor-pointer text-black text-lg px-8 py-6"
                        style={{ backgroundColor: "#eff483" }}
                    >
                        <a href="/contact">Request Demo</a>
                    </button>
                </div>
                <a
                    href="https://ycombinator.com/companies/almond-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground"
                >
                    <span>Backed by</span>
                    <img
                        alt="Y Combinator"
                        loading="lazy"
                        width={100}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-80 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://almondbot.com/yc.svg"
                    />
                </a>
            </div>
        </section>
    )
}

export default HeroSection