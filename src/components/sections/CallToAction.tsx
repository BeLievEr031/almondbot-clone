
interface Prop {
    heading: string;
    description: string;
}

function CallToAction({ heading, description }: Prop) {
    return (
        <section className="container mx-auto px-4 py-24">
            <div className="rounded-lg p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    {heading}
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                    {description}
                </p>
                <div className="flex gap-4 justify-center">
                    <a
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4"
                        href="/contact"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>

    )
}

export default CallToAction