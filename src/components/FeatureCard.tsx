import type { LucideIcon } from "lucide-react"

interface Prop {
    Icon: LucideIcon;
    title: string;
    description: string;
}
function FeatureCard({ Icon, description, title }: Prop) {
    return (
        <div className="p-6 rounded-xl border bg-card hover:bg-accent/5 dark:hover:bg-accent/5 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                    <Icon color="white" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-muted-foreground">
                {description}
            </p>
        </div>
    )
}

export default FeatureCard