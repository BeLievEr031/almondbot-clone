import { LucideEye, LucideFactory, LucidePackage } from "lucide-react"
import MachineTendingVdoSrc from "../../assets/machine_tending.mp4"
import InspectionVdoSrc from "../../assets/inspection.mp4"
import KittingVdoSrc from "../../assets/kitting.mp4"
import UseCaseCard from "../../components/UseCaseCard"

const useCaseArr = [
    {
        icon: LucideFactory,
        heading: "Machine Tending",
        description: "Automate loading/unloading of any machine with vision that adapts to part variations",
        href: "machine-tending",
        videourl: MachineTendingVdoSrc
    },
    {
        icon: LucidePackage,
        heading: "Pick & Place",
        description: "Pick and place items from bins with vision-guided grasping and placement",
        href: "pick-and-place",
        videourl: KittingVdoSrc
    },
    {
        icon: LucideEye,
        heading: "Inspection",
        description: "Perform real-time quality inspection using vision, point cloud, and CAD comparison",
        href: "inspection",
        videourl: InspectionVdoSrc
    }
]

function UseCaseSection() {
    return (
        <section className="container mx-auto px-4 pt-24">
            <h2 className="text-3xl font-bold text-center mb-10">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {useCaseArr.map((item, index) => <UseCaseCard
                    Icon={item.icon}
                    description={item.description}
                    heading={item.heading}
                    href={item.href}
                    videourl={item.videourl}
                    key={index}
                />)}
            </div>
        </section>
    )
}

export default UseCaseSection