import React from "react"
import { LucideArrowRight, LucideGrid3X3, LucideHand, LucideMove, LucidePackage, LucideZap } from "lucide-react"
import IntroSection from "../components/sections/IntroSection"
import FeaturesSection from "../components/sections/FeaturesSection"
import CallToAction from "../components/sections/CallToAction"
import VideoSrc from "../assets/sheet_metal_picking.mp4"

const featuresArr = [
    {
        title: "Bin Picking",
        description: "Advanced vision system for identifying and grasping parts from unstructured bins",
        icon: LucidePackage
    },
    {
        title: "Precise Placement",
        description: "Millimeter-accurate placement for assembly and kitting operations",
        icon: LucideGrid3X3
    },
    {
        title: "Flexible Positioning",
        description: "Adaptable to varying part positions and orientations with real-time adjustments",
        icon: LucideMove
    },
    {
        title: "Multi-Gripper Support",
        description: "Compatible with various gripper types for handling different part geometries",
        icon: LucideHand
    },
    {
        title: "High-Speed Operation",
        description: "Optimized motion planning for maximum throughput and efficiency",
        icon: LucideZap
    },
    {
        title: "Sequential Operations",
        description: "Perform complex pick and place sequences for multi-stage assembly tasks",
        icon: LucideArrowRight
    },
];

function PickAndPlace() {
    return (
        <React.Fragment>
            <IntroSection title="AI-powered robotic pick & place" description="Vision-guided grasping and precise placement for seamless automation" src={VideoSrc} />

            <FeaturesSection
                features={featuresArr}
                title="Pick & Place Features"
            />

            <CallToAction
                heading="Pick & Place Features"
                description="Get started with Almond Bot pick & place today"
            />
        </React.Fragment>
    )
}

export default PickAndPlace