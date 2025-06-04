import { type LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"


interface Prop {
    href: string;
    Icon: LucideIcon
    heading: string;
    description: string;
    videourl: string;
}

function UseCaseCard({ description, heading, href, Icon, videourl }: Prop) {
    return (
        <Link to={href}>
            <div className="p-6 rounded-xl border-1 bg-card hover:bg-accent/5 dark:hover:bg-accent/5 transition-colors group cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                        <Icon color="white" />
                    </div>
                    <h3 className="text-xl font-semibold">{heading}</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                    {description}
                </p>
                <video
                    src={videourl}
                    className="w-full max-w-3xl rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload"
                />
            </div>
        </Link>
    )
}

export default UseCaseCard