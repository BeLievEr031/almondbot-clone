import React from "react"
import IntroSection from "../components/sections/IntroSection"
import FeaturesSection from "../components/sections/FeaturesSection"
import CallToAction from "../components/sections/CallToAction"
import VideoSrc from "../assets/inspection_demo.mp4"
import { LucideEye, LucideRotateCw, LucideScan, LucideZap, LucideZoomIn } from "lucide-react"

const featuresArr = [
    {
        title: "Visual Inspection",
        description: "Advanced machine vision for surface defect detection and quality verification",
        icon: LucideEye
    },
    {
        title: "Precise Measurement",
        description: "Accurate dimensional measurements with millimeter precision",
        icon: LucideScan
    },
    {
        title: "Detailed Analysis",
        description: "Zoom in on detailed features for comprehensive inspection",
        icon: LucideZoomIn
    },
    {
        title: "360° Inspection",
        description: "Complete all-around inspection of parts from every angle",
        icon: LucideRotateCw
    },
    {
        title: "Real-time Processing",
        description: "Instant feedback and decision-making with minimal latency",
        icon: LucideZap
    },
    {
        title: "CAD Comparison",
        description: "Compare parts to CAD files for accurate quality control",
        icon: LucideEye
    },
];



function Inspection() {
    return (
        <React.Fragment>
            <IntroSection title="AI-powered robotic inspection" description="Perform real-time quality inspection using vision, point cloud, and CAD comparison" src={VideoSrc} />

            <FeaturesSection
                features={featuresArr}
                title="Inspection Features"
            />

            <CallToAction
                heading="Ready to upgrade your inspection process?"
                description="Get started with Almond Bot inspection today"
            />
        </React.Fragment>
    )
}

export default Inspection