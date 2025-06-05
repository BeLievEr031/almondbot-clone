import type { LucideIcon } from "lucide-react";
import FeatureCard from "../FeatureCard"



interface ICard {
    title: string;
    description: string;
    icon: LucideIcon
}

interface Prop {
    title: string;
    features: ICard[];
}

function FeaturesSection({ title, features }: Prop) {
    return (
        <section className="container mx-auto px-4 pt-16">
            <h2 className="text-3xl font-bold text-center mb-10">

                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {
                    features.map((item, index) => <FeatureCard
                        Icon={item.icon}
                        description={item.description}
                        title={item.title}
                        key={index}
                    />)
                }
            </div>
        </section>

    )
}

export default FeaturesSection