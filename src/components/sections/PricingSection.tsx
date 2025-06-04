import { LucideClock, LucideDollarSign } from 'lucide-react'
function PricingSection() {
    return (
        <section className="container mx-auto px-4 pt-24">
            <h2 className="text-3xl font-bold text-center mb-6">Pricing</h2>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                Transparent pricing, no hidden fees
            </p>
            <div className="max-w-4xl mx-auto bg-card rounded-xl border shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <div className="flex flex-col text-center">
                        <div className="flex items-center gap-3 mb-4 justify-center">
                            <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                <LucideDollarSign color='white' />
                            </div>
                            <h3 className="text-xl font-semibold">One-Time Setup Fee</h3>
                        </div>
                        <p className="text-3xl font-bold mb-2">$9,000</p>
                        <p className="text-muted-foreground">
                            Includes hardware, software &amp; integration.
                        </p>
                    </div>
                    <div className="flex flex-col text-center">
                        <div className="flex items-center gap-3 mb-4 justify-center">
                            <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                <LucideClock color='white' />
                            </div>
                            <h3 className="text-xl font-semibold">Bot's Hourly Rate</h3>
                        </div>
                        <p className="text-3xl font-bold mb-2">$7/hr</p>
                        <p className="text-muted-foreground">Minimum 10 hours/week.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PricingSection